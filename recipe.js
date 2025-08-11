async function getRecipe()
{
    var response = await fetch(`https://dummyjson.com/recipes`)

    var data = await response.json()

    var recipes = data.recipes

    var temp = ""
    for(i=0; i<recipes.length; i++)
    {
        temp = temp + '<div class="item">';
            temp = temp + '<img src="'+recipes[i].image+'" alt="">';
            temp = temp + '<h4>'+recipes[i].name+'</h4>';
            temp = temp + '<button>Recipe</button>';
        temp = temp + '</div>';
    }

    document.getElementById('result').innerHTML = temp;
}

async function filterByName() {
    let search_input = (document.getElementById('search_input').value).toLowerCase()

    var response = await fetch(`https://dummyjson.com/recipes`)

    var data = await response.json()

    var recipes = data.recipes

    var temp = ""
    for(i=0; i<recipes.length; i++)
    {
        let name = (recipes[i].name).toLowerCase()
        if(name.indexOf(search_input) > -1)
        {
            temp = temp + '<div class="item">';
            temp = temp + '<img src="'+recipes[i].image+'" alt="">';
            temp = temp + '<h4>'+recipes[i].name+'</h4>';
            temp = temp + '<button>Recipe</button>';
            temp = temp + '</div>';
        }
    }

    document.getElementById('result').innerHTML = temp;
}