import React from 'react';
import PropTypes from 'prop-types';

const OneForm = (props) => {
    const {submitHandler, changeHandler, formInfo, buttonValueInfo} = props;
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" value={formInfo.title} onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="number" name="price" value={formInfo.price} onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" value={formInfo.description} onChange={changeHandler} />
                </div>
                <input type="submit" value={buttonValueInfo} />
            </form>
        </div>
    );
};


export default OneForm;