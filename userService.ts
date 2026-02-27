interface User {
    name: string;
    email: string;
}

class userService {
    user: User | null = null;
    constructor(user: User | null){
        this.user = user
    }

    get name(){
        console.log('loading name..')
        return `Name is ${this.user?.name}`;
    }
}
