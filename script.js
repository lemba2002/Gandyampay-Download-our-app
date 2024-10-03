document.addEventListener('DOMContentLoaded', function() {
    const androidBtn = document.getElementById('android-btn');
    const iosBtn = document.getElementById('ios-btn');

    androidBtn.addEventListener('click', function() {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.gandyampay.main_app&hl=fr'; // Lien vers le Google Play Store
    });

    iosBtn.addEventListener('click', function() {
        window.location.href = 'https://apps.apple.com/bf/app/gandyam-pay/id6476113067'; // Lien vers l'App Store
    });
});
