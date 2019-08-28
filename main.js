//Array of objects that represent pies
const pies = [
    {
      name:'Dutch Apple Pie',
      imageURL: 'https://images.unsplash.com/photo-1542761744-f88e3224ddfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
      instructor: 'Zoe',
      iceCream: 'vanilla',
    },
    {
      name:'Berry Pie',
      imageURL: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
      instructor: 'Zoe',
      iceCream: 'vanilla',
    },
    {
      name:'Pumpkin Pie',
      imageURL: 'https://images.unsplash.com/photo-1509461399763-ae67a981b254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
      instructor: 'michael',
      iceCream: 'vanilla',
    },
    {
       name:'Shoo Fly Pie',
       imageURL: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
       instructor: 'michael',
       iceCream: 'coffee',
    },
    {
      name:'Pecan Pie',
      imageURL: 'https://images.unsplash.com/photo-1558324781-7349f1331a35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
      instructor: 'callan',
      iceCream: 'vanilla',
    },
    {
      name:'Keylime Piee',
      imageURL: 'https://images.unsplash.com/photo-1502307837336-d59cca9408a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
      instructor: 'callan',
      iceCream: 'none', 
    },
  ];

  const printToDom = (toPrint, divId) => {
      document.getElementById(divId).innerHTML += toPrint
  }
//accepts an argument 'piesARRAY' and will lopop through the pies and selecting each pie at a time, then it builds
//up a dom string that will print out eventually
  const pieBuilder = (piesArray) => {
      for (let i = 0; i < piesArray.length; i++) {
          const pie = piesArray[i]
          const domString = `
          <div class="card">
            <h2>${pie.name}</h2>
            <img src=${pie.imageURL} alt='Image of ${pie.name}' />
            </div>
            `
            //this function is looking for something to print out on the page and a div id to print it out. The name of the divid is piezone
            printToDom(domString, 'pie-zone')
      }
  }
  

  document.getElementById('my-button').addEventListener('click', pieBuilder)
  document.getElementById('my-button').addEventListener('click', pieBuilder)
  
//   document.getElementById('my-button').addEventListener('click', () =>{
//     console.log('🐭')
// })

  pieBuilder(pies)

