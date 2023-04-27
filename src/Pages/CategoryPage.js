import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import vahicle_1 from "../Img/vahicle 1.jpg"
const CategoryPage = () =>
{
    const [categories, setCategories] = useState([]);

    useEffect(() =>
    {
        // fetch categories from API
        fetch('/api/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error(err));
    }, []);

    const Card = () =>
    {
        return (
            <div className='h-[15rem] w-[15rem] rounded-md shadow-md overflow-hidden border-[2px] border-dark-blue cursor-pointer'>
                <img src={vahicle_1} alt="" className='w-full h-full object-cover' />
            </div>);
    }

    return (
        <div className='w-full h-full py-[6rem] px-5'>
            <h1 className='text-[1.2rem]  font-popins font-xl text-center m-5'>Categories</h1>
            {/* <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        <Link to={`/categories/${category.id}`}>{category.name}</Link>
                    </li>
                ))}
            </ul> */}

            <div className='w-full h-full flex flex-wrap gap-5'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default CategoryPage;
