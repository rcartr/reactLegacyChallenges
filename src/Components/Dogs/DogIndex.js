import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

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
            <Button id="submish" onClick={goodBoy}>Who's a Good Boy?</Button>
            <br />
            <img src={dog} alt="good boy" />
            </center>
        </div>
    );
};

export default DogIndex;