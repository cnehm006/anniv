onload = () => {
    document.body.classList.remove("container");
  };
  
  function updateCountdown() {
    const startDate = new Date('January 24, 2024');
    const now = new Date();
  
    let nextAnniversary = new Date(startDate);
    while (nextAnniversary <= now) {
      nextAnniversary.setMonth(nextAnniversary.getMonth() + 1);
    }
  
    const timeDifference = nextAnniversary - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    let totalMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + now.getMonth() - startDate.getMonth();
    if (now.getDate() < startDate.getDate()) {
      totalMonths--;
    }
  
    const countdownElement = document.getElementById('anniversary-countdown');
  
    if (now.getFullYear() === nextAnniversary.getFullYear() && now.getMonth() === nextAnniversary.getMonth() - 1 && now.getDate() === startDate.getDate()) {
      countdownElement.innerText = `Happy ${totalMonths} months anniversary Mira YAY I LOVE YOU!\n flowers the color of your eyes <3`;
      countdownElement.style.display = 'block';
    } else {
      countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s until our anniversary ml!!`;
      countdownElement.style.display = 'block';
    }
  
    if (now.toDateString() === nextAnniversary.toDateString()) {
      countdownElement.style.display = 'none'; 
    }
  }
  
  setInterval(updateCountdown, 1000);
  