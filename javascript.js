document.getElementById('yesBtn').addEventListener('click', function() {
    // Hide previous GIFs
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('yesGifContainer').style.display = 'none';
  
    // Display positive message
    document.getElementById('message').textContent = 'Yay! You made my day! 💖';
    document.getElementById('message').style.color = '#4caf50';
  
    // Show the "Yes" GIF
    const gifContainer = document.getElementById('gifContainer');
    const valentineGif = document.getElementById('valentineGif');
    valentineGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnE3Njd6ejFtM2J5NHBxOXdsN3V5YjZ5MWhzaGFsY2czZWk1ejB1ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lck9f0L8jPjRtkigYy/giphy.gif"; // Replace with your "Yes" GIF URL
    gifContainer.style.display = 'block';
  
    // Show the button for the love letter
    document.getElementById('loveLetterBtnContainer').style.display = 'block';
  });
  
  document.getElementById('yesBtn2').addEventListener('click', function() {
    // Hide previous GIFs
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('yesGifContainer').style.display = 'none';
  
    document.getElementById('message').textContent = 'You said yes again! 💖';
    document.getElementById('message').style.color = '#4caf50';
    
    // Show another "Yes" GIF (or use the same GIF)
    const yesGifContainer = document.getElementById('yesGifContainer');
    const yesGif = document.getElementById('yesGif');
    yesGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnE3Njd6ejFtM2J5NHBxOXdsN3V5YjZ5MWhzaGFsY2czZWk1ejB1ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lck9f0L8jPjRtkigYy/giphy.gif"; // Replace with another "Yes" GIF URL if you want
    yesGifContainer.style.display = 'block';
  
    // Show the button for the love letter
    document.getElementById('loveLetterBtnContainer').style.display = 'block';
  });
  
  document.getElementById('loveLetterBtn').addEventListener('click', function() {
    // Show the overlay and love letter
    const loveLetterOverlay = document.getElementById('loveLetterOverlay');
    const loveLetterText = document.getElementById('loveLetterText');
    
    // Insert love letter text here
    loveLetterText.innerHTML = `
      <span>My beloved iya</span><br><br>
      <span>Every moment I spend with you is a gift. I cherish our late-night conversations, our silly jokes, and our deep, meaningful talks.</span><br><br>
      <span>You make me feel seen, heard, and loved in ways I never thought possible. I'm grateful for your love, your support, and your existence in my life.</span><br><br>
      <span>Over the months, I've fallen more and more in love with you. I've fallen in love with your kindness, and your care. I've fallen in love with your flaws, and your imperfections i mean your perfect just the way you are and your uniqueness hihi. I've fallen in love with the way you show how you really loved me.</span><br><br>
      <span>You are my best friend, and my soulmate. You make me feel like I'm in the right relationship with you, like I'm exactly where I'm meant to be. You always make me feel like I'm special to you.</span><br><br>
      <span>I love you for who you are, for who you help me to be, and for the life we're building together. I love you for the laughter, the tears, and the memories we've shared. I love you for the adventures we've had, the challenges we faced.</span><br><br>
      <span>Most of all, I love you for being you, for being my everything.</span><br><br>
      <span>Forever and always,<br>"mike mike"</span>`;
  
    // Display the overlay
    loveLetterOverlay.style.display = 'flex';
  });
  