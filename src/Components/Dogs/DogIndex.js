import React, { useState, useEffect } from 'react';

const DogIndex = () => {
    let [dog, setDog] = useState('');

    function goodBoy() {
        let dogApi = 'https://dog.ceo/api/breeds/image/random'

        fetch(dogApi)
        .then(response => response.json())
        .then(data => setDog(data.message))
        .catch(err => console.log(err))
    };

    useEffect(() => {
        goodBoy()
    }, []);

    return (
        <div className="myDiv">
            <center>
            <button onClick={goodBoy}>Who's a Good Boy?</button>
            <br />
            <img src={dog} alt="good boy" />
            </center>
        </div>
    );
};

export default DogIndex;