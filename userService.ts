interface User {
    name: string;
    email: string;
    role: string;
}

class userService {
    user: User | null = null;
    constructor(user: User | null){
        this.user = user
    }

    get email(){
        return `Email is ${this.user?.email}`;
    }
    
    get name(){
        setTimeout(() => {
            console.log('Loading...');
        }, 2000);
        return `Name is ${this.user?.name}`;
    }
}
