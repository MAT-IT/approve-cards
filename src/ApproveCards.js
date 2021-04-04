


const ApproveCards =(props)=>{
    const {name,date,avatar,children}=props;
    return(
    <div class="ui card">
        <div class="image">
            <img src={avatar}/>
        </div>
        <div class="content">
            <a class="header">{name}</a>
            <div class="meta">
                <span class="date">Joined in {date}</span>
            </div>
            <div class="description">
                {name} is an art director living in New York.
            </div>
        </div>
        {children}
    </div>
    )
}

export default ApproveCards;