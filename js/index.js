 document.getElementById("myButton").addEventListener("click", function() {
        alert("Button was clicked!");
    });
    console.log("Hello, World!");
    document.getElementById("myDiv").innerText = "This text was added by JavaScript.";
   const container = document.getElementById("myDiv");

   //array of services objects
    const services = [
        {
            title:"Web Development", 
            description:"Building responsive and modern websites.", 
            linkTo: "https://example.com/web-development"
        },

        {
            title:"Graphic Design", 
            description:"Creating stunning graphics and visuals.", 
            linkTo: "https://example.com/graphic-design"
        },

        {
            title:"SEO Optimization", 
            description:"Improving your website's visibility on search engines.", 
            linkTo: "https://example.com/seo-optimization"
        }

    ]

    //rendering services to the HTML
    const servicesContainer = document.getElementById("myDiv");
    services.forEach(service => {
        const serviceDiv = document.createElement("div");
        serviceDiv.className = "service-card";
        //creating title element
        const title =document.createElement("h2"); 
        title.innerText = service.title;
        serviceDiv.appendChild(title);
        //creating description element
        const description = document.createElement("p");
        description.innerText = service.description;
        serviceDiv.appendChild(description);

        //creating link element
        const link = document.createElement("a");
        link.href = service.linkTo;
        link.innerText = "Learn more";
        serviceDiv.appendChild(link);
        servicesContainer.appendChild(serviceDiv);
    });

    function ReadValue(){
        const inputValue = document.getElementById("myInput").value;
       // alert(inputValue);
        document.getElementById("output").innerText = inputValue;

    }

    //eventlisterner for form submission`
    document.getElementById("myForm").addEventListener("submit", function(event){
        event.preventDefault(); //preventing default form submission
        ReadValue(); //calling the function to read input value
    }); 



    //form

    


    
