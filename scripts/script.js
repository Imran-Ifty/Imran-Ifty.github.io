document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.querySelector('.Prompt__input');
    const terminalText = document.querySelector('.Terminal__text');
    let commandCount = 0; // Variable to track the command count
  
    inputField.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        const command = inputField.value.trim();
        inputField.value = ''; // Clear input field after entering command
  
        if (command === 'clear') {
          clearTerminal();
        } else {
          displayCommandResult(command);
        }
      }
    });
  
    function displayCommandResult(command) {
      // Increment the command count
      commandCount++;
      // Create a new command prompt and display the entered command
      let newCommandPrompt = '';
      switch (command) {
        case "ls":
          newCommandPrompt += `<div class = "prompt"><span 
                    class="GreenText">Imran@Ifty:~$ 
                    </span> ${command}</div>`;
          terminalText.innerHTML += newCommandPrompt;
  
          // Add clickable letters under the terminal text
          terminalText.innerHTML += `<div><span class="ClickableLetter">Projects</span> 
                  <span         
                  class="ClickableLetter">Skills</span> <span class="ClickableLetter">Github</span> 
                  <span 
                  class="ClickableLetter">About</span></div><br>`;
          break;
  
        case "pwd":
          newCommandPrompt += `<div class = "prompt"><span 
                    class="GreenText">Imran@Ifty:~$ 
                    </span> ${command}</div>`;
          terminalText.innerHTML += newCommandPrompt;
  
          terminalText.innerHTML += `<div>home/Imran-Ifty</div><br>`;
          break;
  
        case "whoami":
          newCommandPrompt += `<div class = "prompt"><span 
                    class="GreenText">Imran@Ifty:~$ 
                    </span> ${command}</div>`;
          terminalText.innerHTML += newCommandPrompt;
  
          terminalText.innerHTML += `<div>Imran-Ifty</div><br>`;
          break;
        case "cat":
          newCommandPrompt += `<div class = "prompt"><span 
                    class="GreenText">Imran@Ifty:~$ 
                    </span> ${command}</div>`;
          terminalText.innerHTML += newCommandPrompt;
  
          terminalText.innerHTML += `<div><span 
                  class="ClickableLetter">Meeeeeeeeeeeeeaaaaaaaaaaaaaaaaooooooowwwwwwww</span>
                  </div><br>`;
          break;
  
        case "cd Projects":
        case "cd Skills":
        case "cd Github":
        case "cd About":
          newCommandPrompt += `<div class = "prompt"><span 
                    class="GreenText">Imran@Ifty:~$ 
                    </span> ${command}</div>`;
          terminalText.innerHTML += newCommandPrompt;        
          const directoryName = command.split("cd ")[1];
          if(directoryName == "Projects"){
            terminalText.innerHTML += 
            `<div> <span>
                <a href="https://github.com/Imran-Ifty/CSEKU_SDP_2023_TraPing_-_A_PingPong_and_Pacman_game_Combo" class="ClickableLetter" target="_blank">
                    Traping- A pacman Game
                </a>
                </span><br>
                
                <span>
                <a href="https://github.com/Imran-Ifty/wsl-distro-manager" class="ClickableLetter" target="_blank">
                    WSL Distro Manager
                </a>
                </span><br>
                
                <span>
                <a href="https://github.com/Imran-Ifty/Project-Generator" class="ClickableLetter" target="_blank">
                    PHP-Project Generator
                </a>
                </span>     

            </div><br>`;
          }
          if(directoryName == "About" || directoryName == "Skills")
          {

             terminalText.innerHTML +=`<div> <span>
            <a href="https://github.com/Imran-Ifty/Imran-Ifty/blob/master/README.md" class="ClickableLetter" target="_blank">Readme</a>

            </span><br>
         </div><br>`;
        
          }

          if(directoryName == "About" || directoryName == "Skills")
          {

             terminalText.innerHTML +=`<div> <span>
            <a href="
            https://github.com/Imran-Ifty" class="ClickableLetter" target="_blank">GitHub</a>

            </span><br>
         </div><br>`;
        
          }
          break;
        
        case "":
          newCommandPrompt += `<div class = "prompt"><span 
          class="GreenText">Imran@Ifty:~$ 
          </span> ${command}</div>`;
          terminalText.innerHTML += newCommandPrompt;
          terminalText.innerHTML += 
          `<div><span class="ClickableLetter">
            Help: command -> cd, ls, pwd, cat , clear
          </span></div><br>`;
      }
  
      // Scroll to the bottom of the terminal
      terminalText.scrollTop = terminalText.scrollHeight;
    }
  
    function clearTerminal() {
      // Clear the terminal
      terminalText.innerHTML = '';
      commandCount = 0; // Reset the command count
    }
  });
  
  function toggleTerminal() {
    var terminal = document.getElementById("terminal");
    var terminalApp = document.getElementById("terminalApp");
  
    if (terminal.style.display === "none") {
      terminal.style.display = "block";
      terminalApp.style.display = "none";
    } else {
      terminal.style.display = "none";
      terminalApp.style.display = "block";
    }
  }
  


  
