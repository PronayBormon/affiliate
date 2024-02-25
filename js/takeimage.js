$(document).ready(function () {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const captureButton = document.getElementById('captureButton');
    const capturedImage = document.getElementById('capturedImage');
    const submitButton = document.getElementById('submitButton');

    let stream;

    // Start camera
    $('#startCameraButton').click(function () {
        initCamera();
        $('#startCameraButton').hide();
        $('#cameraContainer').show();
    });

    // Get access to the camera
    async function initCamera() {
        try {
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
        } catch (err) {
            console.error('Error accessing the camera:', err);
        }
    }

    // Capture image from video stream
    $('#captureButton').click(function () {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        $('#capturedImage').attr('src', canvas.toDataURL('image/jpeg'));
        $('#capturedImage').css('display', 'block');
        $('#submitButton').css('display', 'block');
    });

    // Submit captured image
    $('#submitButton').click(function () {
        const imageData = $('#capturedImage').attr('src');
        $.ajax({
            url: 'submit.php',
            type: 'POST',
            data: { imageData: imageData },
            success: function (response) {
                console.log(response);
                alert(response); // Display response from server
            },
            error: function (xhr, status, error) {
                console.error('Error submitting image:', error);
            }
        });
    });

    // Stop camera when page is unloaded
    $(window).on('unload', function () {
        if (stream) {
            stream.getTracks().forEach(track => {
                track.stop();
            });
        }
    });
});
