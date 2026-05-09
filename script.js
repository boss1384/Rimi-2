document.addEventListener('DOMContentLoaded', () => {

    // Eye Toggle
    const eye = document.querySelector('.eye');
    const amount = document.querySelector('.balance-amount');
    let visible = true;

    if (eye) {
        eye.addEventListener('click', () => {
            visible = !visible;
            amount.textContent = visible ? '₦0.00' : '••••••';
        });
    }

    // Fund Wallet Button
    const fundBtn = document.querySelector('.fund-btn');
    if (fundBtn) {
        fundBtn.addEventListener('click', () => {
            alert("💰 Fund Wallet Button is Working!\n\nYou can now add payment options here.");
        });
    }

    // Services Click
    document.querySelectorAll('.service-item').forEach(item => {
        item.addEventListener('click', () => {
            const name = item.textContent.trim();
            alert(`🛍️ Selected: ${name}\n\nThis will open the buying page.`);
        });
    });

    // Verify Banner Click
    const verify = document.querySelector('.verify-banner');
    if (verify) {
        verify.addEventListener('click', () => {
            alert("✅ Verification Page\n\nKYC form will open here.");
        });
    }
});
