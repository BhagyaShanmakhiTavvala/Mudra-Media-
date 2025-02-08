// Toggle visibility of category text
function toggleText(categoryId) {
    const categoryText = document.getElementById(categoryId);
    categoryText.style.display = categoryText.style.display === "none" ? "block" : "none";
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('share-button');
    
    shareButton.addEventListener('click', async () => {
        const urlToShare = window.location.href;
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Mudra Media Business Card',
                    text: 'Check out this digital business card for Mudra Media!',
                    url: urlToShare,
                });
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(urlToShare);
                alert('Link copied to clipboard!');
            } else {
                alert('Sharing not supported on this browser.');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    });
});

  
// Save Contact Button - Creates a downloadable vCard file
document.getElementById('save-contact-button').addEventListener('click', () => {
    const vCardData = `
  BEGIN:VCARD
  VERSION:3.0
  FN:Mudra Media
  ORG:Mudra Media
  TEL:+9666912129
  EMAIL:mudramedia66@gmail.com
  END:VCARD
    `;
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Mudra_Media.vcf';
    a.click();
  
    URL.revokeObjectURL(url);
  });
  