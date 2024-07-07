"use client"

import { useEffect, useState } from "react";

export default function Page() {

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/users');
                const data = await response.json();
                console.log(data);
                setUsers(data.users);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>API</h1>
            {
                users.length > 0 ? (
                    users.map((item) => (
                        <h3 key={item.id}> 
                            Firstname: {item.firstName} <br/>
                            Lastname: {item.lastName} <br/>
                            Age: {item.age}
                        </h3>
                    ))
                ) : (
                    <p>Loading...</p> // Show a loading message or any fallback UI while the data is being fetched
                )
            }
        </div>
    );
}