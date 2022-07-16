const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      searchInput: ["mushrooms", "quinoa", "cheese"],
      pillDietInput: [],
      isLoaded: false,
      error: null,
      items: [],
      favoriteItems: [],
      shoppingList: [],
      userToken: localStorage.getItem("jwt-token") ?? null,
      userLogged: false,
      userEmail: null,
      userId: null,
    },
    actions: {
      searchInputHandler: (textSearch) => {
        setStore({ searchInput: textSearch });
      },
      searchAPI: () => {
        setStore({ isLoaded: false });
        const store = getStore();
        let search = store.searchInput;
        const diet = store.pillDietInput;
        if (search.length === 0) {
          search = ["mushrooms", "quinoa", "cheese"];
        }
        fetch(
          `https://api.edamam.com/api/recipes/v2?type=public&app_id=e5010e00&app_key=0326e037783040d1e8513857ee63d982&q=${search}&healt=${diet}`
        )
          .then((response) => response.json())
          .then(
            (result) => {
              setStore({ items: result.hits });
              setTimeout(() => {
                setStore({ isLoaded: true });
              }, 5000);

              // console.table(result.hits[0].recipe);
            },
            (error) => {
              setStore({ isLoaded: true });
              setStore({ error: error });
              console.log("nooooooooo", error);
            }
          );
      },
      addShoppingList: (ingredient) => {
        const store = getStore();
        setStore({ shoppingList: [...store.shoppingList, ingredient] });
      },
      removeShoppingList: (ingredient) => {
        const store = getStore();
        const list = store.shoppingList.filter((line) => {
          if (
            line.recipeUri === ingredient.recipeUri &&
            line.ingredientIndex === ingredient.ingredientIndex
          ) {
            return false;
          } else {
            return true;
          }
        });
        setStore({ shoppingList: list });
      },
      removeShoppingListByIndex: (index) => {
        const store = getStore();
        const list = store.shoppingList.filter((line, i) => {
          if (i === index) {
            return false;
          } else {
            return true;
          }
        });
        setStore({ shoppingList: list });
      },
      updatePillArr: (dietPlan) => {
        const store = getStore();
        const element = store.pillDietInput.find((elem) => {
          return elem === dietPlan;
        });
        console.log("element", element);
        if (element === undefined) {
          setStore({ pillDietInput: [...store.pillDietInput, dietPlan] });
        } else {
          const newArr = store.pillDietInput.filter((elem) => {
            if (elem === dietPlan) {
              return false;
            } else {
              return true;
            }
          });
          setStore({ pillDietInput: newArr });
        }
      },
      clearPillArr: () => {
        setStore({ pillDietInput: [] });
      },
      login: (email, password) => {
        fetch(`${process.env.BACKEND_URL}/api/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, password: password }),
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("jwt-token", data.token);
            setStore({ userToken: localStorage.getItem("jwt-token") });
          })
          .catch((err) => alert("Invalid credentials!"));
      },
      getToken: () => {
        setStore({
          userToken: localStorage.getItem("jwt-token") ?? null,
        });
      },
      addFavorite: (newItem) => {
        const store = getStore();
        setStore({ favoriteItems: [...store.favoriteItems, newItem] });
        console.log(store.favoriteItems);
      },
      sendToDatabase: (favorite) => {
        const token = localStorage.getItem("jwt-token");
        fetch(`${process.env.BACKEND_URL}/api/favorites/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(favorite),
        }).then((resp) => {resp.json()});
      },
    },
  };
};

export default getState;
