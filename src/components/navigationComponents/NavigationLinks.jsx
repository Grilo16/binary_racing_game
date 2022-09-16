const NavigationLinks = function({linkObject}){

    const key = Object.keys(linkObject)
    const route = Object.values(linkObject)
    
    return (
    <li className="navigation-links">
        <a href={route}>{key}</a>
    </li>
    )
};

export default NavigationLinks