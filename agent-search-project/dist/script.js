document.getElementById("searchInput").addEventListener("keyup",function(event) {
  let searchQuery = event.target.value.toLowerCase(); 
  let allNamesDOMCollection = document.get.ElementByClassName("name");
  
  for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
    const currenName = allNamesDOMCollection[counter].textContent.toLowerCase();
    
    if (currentName.includes(searchQuery)) {
      allNamesDOMCollection[counter].style.display = "block";
    } else {
      allNamesDOMCollection[counter].style.display = "none";
  }
  
})