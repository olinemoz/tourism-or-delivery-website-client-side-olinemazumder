import React from 'react';

const WeProvide = () => {
    return (
        <div style={{marginTop: '50px'}}>
            <h2 className="mb-4 bg-primary py-3 text-white text-center mx-2 rounded">We Provides</h2>

            <div className="d-block mx-auto w-75 shadow-lg p-4">
                <h4>We Offers: </h4>
                <p style={{textAlign: 'justify'}}>
                    1. Single Package <br/>
                    2. Couple Package <br/>
                    3. Breakfast <br/>
                    4. Lunch <br/>
                    5. Dinner <br/>
                    6. Bar-B-Q
                </p>
            </div>
        </div>
    );
};

export default WeProvide;