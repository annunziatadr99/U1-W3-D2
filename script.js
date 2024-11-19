 /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

       const changeTitle = function () {
        const title = document.querySelector("h1")
        title.innerText = "U1-W3-D2"
       };
       changeTitle()

       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
       const addClassToTitle = function () {
        const title = document.querySelector("h1")
        title.classList.add("myHeading")
       };
       addClassToTitle()
 
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
 
        const changePcontent = function () {
            const paragraphs = document.querySelectorAll('div p')
            for (let i = 0; i < paragraphs.length; i++) {
              const pEl = paragraphs[i]
              paragraphs[i].innerText = 'Vi ho trovati Bastardi!'
            }
          }
          changePcontent()

    
 
       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 
       const changeUrls = function () {
        const myHref = document.querySelectorAll("a:not(footer a)")  // ("a:not(footer a)") ricordati che questo metodo serve a non selezionare un preciso elemento dal queryselectorAll
        for (let i = 0; i < myHref.length; i++) {
            const newHref = myHref[i];
           newHref.href = "https://www.google.com"
            
        }
       };changeUrls()
 
       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
 
       const addToTheSecond = function () {
        const secondList = document.getElementById("secondList")
        const newLi = document.createElement("li")
        newLi.innerText = "4rd"
        secondList.appendChild(newLi)
       };addToTheSecond()
 
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
       const addParagraph = function () {
        const firstDiv = document.querySelector("div")
        const newP = document.createElement("p")
        newP.innerText = "Nuovo paragrafo"

        firstDiv.appendChild(newP)
       };
       addParagraph()
 
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
       const hideFirstUl = function () {
        const primaLista = document.getElementById("firstList")
        primaLista.onclick = function() {
            primaLista.remove()
        }
       

       };
       hideFirstUl()
 
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
       const paintItGreen = function () {
        const ulElement1 = document.getElementById("firstList")
        ulElement1.style.backgroundColor = "green"  
        const ulElement2 = document.getElementById("secondList") 
        ulElement2.style.backgroundColor = "green"                                  
       };paintItGreen()
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
 
       const makeItClickable = function () {
        const h1 = document.querySelector("h1")
        h1.onclick = function () {
            h1.textContent = h1.textContent.slice(0, -1)
           
            
        }
       
       };makeItClickable()
 
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {
        const footer = document.querySelector("footer")
        footer.onclick = function(){
            const FooterLink = document.querySelector("footer a")
            const linkUrl = FooterLink.getAttribute("href")   // getAttribute per prendere l'attributo di un elemento come in questo caso HREF di A
           alert(linkUrl)
        }

       };revealFooterLink()
 
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
 
       const generateTable = function () {};
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
       const addRow = function () {};
 
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
 
       const hideAllImages = function () {};
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {};