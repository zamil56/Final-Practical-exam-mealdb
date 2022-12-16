let submit = document.querySelector('.submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    getMealList();
});






let heading = document.getElementById("heading");
function getMealList() {
    let cuisine = document.getElementById("cuisine").value.toLowerCase();
    let noitems = document.getElementById("noitems").value;


    if (cuisine == "") {
        document.getElementById("cuisine").focus();
    } else {
        if (noitems == "") {
            document.getElementById("noitems").focus();
        } else {

            let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${cuisine}`;
    
            let heading2 = document.querySelector(".heading2");
            heading2.innerHTML = "Search results for " + cuisine;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let html = "";
                    if (data.meals) {
                        data.meals.forEach((meal, index) => {
                            if (index >= noitems) return
                            html += `
                                    <div class="col-lg-4 col-md-6 d-flex justify-content-center d-sm-flex justify-content-sm-center my-2 goat">
                                        <div class="card" style="width: 18rem;" data-id="${meal.idMeal}">
                                            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">${meal.strMeal}</h5>
                                                <button class="btn btn-success">See Recipe</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    `;
                        });
                    }

                    heading.innerHTML = html;
                }).catch(error => console.log(error));
        }
    }
    
   

    

    


}


