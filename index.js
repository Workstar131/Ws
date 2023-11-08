
  
    // This function will be called when the user submits the form
    async function sendMessages() {
      // Get the WhatsApp numbers file from the form
      const whatsappNumbersFile = document.querySelector('#whatsapp_numbers_file').files[0];

      // Get the message to send from the form
      const message = document.querySelector('#message').value;

      // Read the WhatsApp numbers from the file
      const whatsappNumbers = await whatsappNumbersFile.text();

      // Split the WhatsApp numbers into an array
      const whatsappNumbersArray = whatsappNumbers.split(',');

      // Send a WhatsApp message to each of the numbers in the array
      for (const whatsappNumber of whatsappNumbersArray) {
        // Construct the WhatsApp message URL
        const whatsappMessageUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Open the WhatsApp message URL in a new tab
        window.open(whatsappMessageUrl, '_blank');
      }
    }

    // Add an event listener to the form so that the sendMessages function is called when the user submits the form
    document.querySelector('form').addEventListener('submit', sendMessages);
  



