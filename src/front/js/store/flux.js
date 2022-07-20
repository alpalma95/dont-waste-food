const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      searchInput: ["mushrooms", "quinoa", "cheese"],
      pillDietInput: [],
      isLoaded: false,
      error: null,
      items: [],
      favoriteItems: [], // filter by category to display on view, by default all
      shoppingList: [],
      userToken: localStorage.getItem("jwt-token") ?? null,
      userLogged: !localStorage.getItem("jwt-token") ? false : true,
      userEmail: null,
      userId: null,
      showBreakfast: false,
      showLunch: false,
      showDinner: false,
      showSnack: false,
      showAll: true,
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
              }, 2000);
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
        }).then((resp) => {
          resp.json();
        });
      },
      fetchFavorites: () => {
        const store = getStore();
        const token = localStorage.getItem("jwt-token");
        fetch(`${process.env.BACKEND_URL}/api/favorites/get`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
          .then((resp) => resp.json())
          .then((data) => setStore({ favoriteItems: data }))
          .then(() => console.log(store.favoriteItems));
      },
      showBreakfastHandler: () => {
        const store = getStore();
        setStore({ showBreakfast: !store.showBreakfast, showAll: false });
        if (
          !store.showBreakfast &&
          !store.showLunch &&
          !store.showDinner &&
          !store.showSnack &&
          !store.showAll
        )
          setStore({ showAll: true });
      },
      showLunchHandler: () => {
        const store = getStore();
        setStore({ showLunch: !store.showLunch, showAll: false });
        if (
          !store.showBreakfast &&
          !store.showLunch &&
          !store.showDinner &&
          !store.showSnack &&
          !store.showAll
        )
          setStore({ showAll: true });
      },
      showDinnerHandler: () => {
        const store = getStore();
        setStore({ showDinner: !store.showDinner, showAll: false });
        if (
          !store.showBreakfast &&
          !store.showLunch &&
          !store.showDinner &&
          !store.showSnack &&
          !store.showAll
        )
          setStore({ showAll: true });
      },
      showSnackHandler: () => {
        const store = getStore();
        setStore({ showSnack: !store.showSnack, showAll: false });
        if (
          !store.showBreakfast &&
          !store.showLunch &&
          !store.showDinner &&
          !store.showSnack &&
          !store.showAll
        )
          setStore({ showAll: true });
      },
      showAllHandler: () => {
        const store = getStore();
        if (!store.showAll)
          setStore({
            showBreakfast: false,
            showLunch: false,
            showDinner: false,
            showSnack: false,
            showAll: true,
          });
      },
    },
  };
};

export default getState;
