// class User {
//     constructor(userName) {
//         this._userName = userName;
//     }
//     getUserName() {
//         return this._userName;
//     }
// }

// let newUser = new User("iQubb");


function createPost(ID, productName, storeName, purchasePrice) {
    return {
        ID,
        productName,
        storeName,
        purchasePrice
    };
}


class PostsInteraction {
    postsArray = [];
    MAX_NUMBER_OF_POSTS = 20;
    numberOfPosts = 0;


    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }


    constructor() {
        this.#initializeArrayOfPosts(this.MAX_NUMBER_OF_POSTS / 2);
    }

    isValidatePost(Post) {
        return typeof Post.ID === "number" && typeof Post.productName === "string" &&
            typeof Post.storeName === "string" && typeof Post.purchasePrice === "number";
    }



    printPostArray() {
        for (const currentElement of this.postsArray) {
            console.log(currentElement);
        }
    }

    #initializeArrayOfPosts(numberOfPosts) {
        let sneakersArray = ['Nike Air Zoom Pegasus', 'Nike Air Force LV-8', 'Nike Blazer Mid', 'Jordan MA', 'Nike Wildhorse', 'Jordan delta', 'Nike Air Max 270'];
        this.numberOfPosts = numberOfPosts;
        for (let i = 0; i < numberOfPosts; ++i) {
            this.postsArray.push(createPost(i, sneakersArray[this.getRandomInt(0, sneakersArray.length)], "Nike", 100 * (i + 1)));
        }
    }

    getPost(ID) {
        return this.postsArray.find((element, index, array) => {
            return element.ID === ID
        });
    }

    getPosts(skip = 0, top = 10, filterConfig = {
        productName: null,
        priceFrom: null,
        priceTo: null
    }) {
        return this.postsArray.filter(el => (filterConfig.productName == null || filterConfig.productName === el.productName) &&
            (filterConfig.priceFrom == null || filterConfig.priceFrom <= el.purchasePrice) && (filterConfig.priceTo == null || filterConfig.priceTo >= el.purchasePrice)).slice(skip, skip + top);
    }

    getPostNumber() {
        return this.numberOfPosts;
    }

    addPost(Post) {
        if (!this.isValidatePost(Post)) {
            console.log("The post is set incorrectly");
            return false;
        } else {
            this.numberOfPosts++;
            View.postsOnPage++;
            this.postsArray.push(Post);
            View.addPost(Post);
            console.log("Post added");
            return true;
        }
    }

    removePost(ID) {
        let isPostWithThisIdHere = false;

        for (let i = 0; i < this.postsArray.length; ++i) {
            if (this.postsArray[i].ID === ID) {
                this.numberOfPosts--;
                View.postsOnPage--;
                View.removePost(i);
                isPostWithThisIdHere = true;
                this.postsArray.splice(i, 1);
            }
        }

        console.log('Array after removing: ' + this.postsArray);


        if (!isPostWithThisIdHere) console.log("There is no post with this ID in array");

        this.printPostArray();
    }

    editPost(ID, Post) {
        if (!this.isValidatePost(Post)) {
            console.log("The post is set incorrectly");
        } else {
            for (let i = 0; i < this.postsArray.length; ++i) {
                if (this.postsArray[i].ID == ID) {
                    this.postsArray[i] = Post;
                    View.editPost(i, Post);
                    return true;
                }
            }
        }
        return false;
    }

    sortArrayOfPostsByPrice() {
        console.log("Array sorted by price");
        this.postsArray.sort((a, b) => a.purchasePrice > b.purchasePrice ? 1 : -1);
    }

    sortArrayOfPostsByID() {
        console.log("Array sorted by ID");
        this.postsArray.sort((a, b) => a.ID > b.ID ? 1 : -1);
    }

    sortArrayOfPostsByStoreName() {
        console.log("Array sorted by store name");
        this.postsArray.sort((a, b) => a.storeName > b.storeName ? 1 : -1);
    }

}

let testValue = new PostsInteraction();

// console.log(a.getPost(1));

// a.removePost(1);
// a.printPostArray();


// console.log(a.isValidatePost({
//     ID: 5,
//     description: "AirForce0",
//     storeName: "Adidas",
//     purchasePrice: 100
// }));

// console.log(a.isValidatePost({
//     ID: 5,
//     description: "ball",
//     storeName: "Adidas",
//     purchasePrice: "notNumber"
// }));



// a.addPost({
//     ID: 90,
//     description: "ball",
//     storeName: "Adidas",
//     purchasePrice: 1000
// });


// a.addPost({
//     ID: 5,
//     description: "ball",
//     storeName: "Adidas",
//     purchasePrice: "notNumber"
// });



// a.sortArrayOfPostsByPrice();
// a.printPostArray();

// a.sortArrayOfPostsByID();
// a.printPostArray();

// a.sortArrayOfPostsByStoreName();
// a.printPostArray();