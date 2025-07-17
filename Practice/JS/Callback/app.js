// Count down from a number using callbacks

// Output: 5... 4... 3... 2... 1... Blast Off!
// countdown(5);

function countdown(num, decreaseCount) {
    setTimeout(() => {
      console.log(num + "...");
      if (decreaseCount) {
        decreaseCount(num - 1);
      }
    }, 1000);
  }
  
  countdown(5, (n1) => {
    countdown(n1, (n2) => {
      countdown(n2, (n3) => {
        countdown(n3, (n4) => {
          countdown(n4, () => {
            setTimeout(() => {
              console.log("Blast Off! 🚀");
            }, 1000);
          });
        });
      });
    });
  });
  