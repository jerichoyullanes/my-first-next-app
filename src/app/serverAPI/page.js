async function useList () {
    let data = await fetch('https://dummyjson.com/users');
    data = await data.json();
    return data.users;
}

export default async function Page() {
    let users = await useList();
    return(
        <div>
            <h1>SERVER API</h1>
            {
                users.map((item) => (
                    <h3 key={item.id}> 
                        Firstname: {item.firstName} <br/>
                        Lastname: {item.lastName} <br/>
                        Age: {item.age}
                    </h3>
                ))
            }
        </div>
    );
}