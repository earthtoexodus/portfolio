document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form submission
  
    const webhookUrl = 'https://discord.com/api/webhooks/1331313016901206017/kIYLkSaItQVZcur57_wbC2dJQZUAnp9SVf7scR1dbAWr-PMUymjHCesAc5OTey-6UIgs';
    const username = document.getElementById('discord-user').value;
    const message = document.getElementById('msg').value;
  
    // Construct the payload
    const payload = {
      content: `# __NEW MESSAGE__!
**USER:** ${username}
**MESSAGE:** ${message}`
    };
  
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        alert('Sent!');
      } else {
        alert('Hmm... it did not send. Try again later!');
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  });
  