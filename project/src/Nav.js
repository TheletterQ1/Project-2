import react from 'react';

const Nav = () => {
 return (  
   <div>
       <nav style={{display: "flex", alignContent: 'center', justifyContent: 'space-between'}}>
       <div id="hamburger">☰</div>    
       <Link to='/About'>
         <h4>About</h4>
       </Link>
       <Link to='/Search'>
         <h4>Search</h4>
       </Link>
       </nav>
       <main>
       <Switch>
          <Route exact path ='/'>
            <App />
          </Route>
          <Route exact path ='/About'>
            <aboutMe />
           </Route>
          {/* <Route exact path ='/Search'>
            <Searches /> 
           </Route> */}
        </Switch> 
       </main>
        </div>
 )
}

