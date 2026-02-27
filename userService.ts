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
        setTimeout(() => {
            console.log('Loading...')
        }, 2000);
        return `Name is ${this.user?.name}`;
    }
}
