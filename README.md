## React Tours Page  π
### demo : https://amrelmalky.github.io/Tours-Page-ByReact/

### pseudo codeeeee

#### (1) - Fetch data from givan url data
=====================================


πCreate Loading logic while fetch data using State

π Fetch data using async fetch method with UseEffect to rendard the data once when 
  the  application rendared for the first time 

  // Fetch data
  const fetchTours = async () => {
    setLoading(true); // Make sure for sure that loading variable = true
    try {
      const response = await fetch(url);
      const tours = await response.json();

      setLoading(false);
      setTours(tours);

    } catch (error) {
      setLoading()
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);


  #### (2) - Tours Displaying Data
  =========================

  π In App comp we are Passing tours variable = our date array of objects
    As a props to <Tours tours={tours}/> component .

  π In Our Tours componenet we looping using Map Method through each object in array 
    in our array of data .

  π In Tours component start Passing Each of object properity to <Tour/> Component 
    As a props using a desturcturing technique for objects {...object}.
  
  π In Tour component start to desturcturing technique for objects {...object}
     In order to use object properties Tour = ({ id, name, info, image, price })

  π In the last start to Display our data 

    article Tag
       β
     image src {image } alt ={name}
       β
     footer Tag
       β
       div with class tour-info
       h4 {name} 
       h4 {price}
       /div 
       β
       p {info}
       button

#### (4)- Working with functionality 
  =========================

  [first logic] β  Playing with Tours info 


π  Display limited info and if user press (Read more...)
    He can see the full info about that Tour Then Can Press (Read Less...) to return back.


π  doing that using useState


  [Second logic ] β  Tours delete button 

   

π ask yourself small question where is my data ? in App component it is the place we  
   started to fetch data ,  So that the place we will create our deleted function,
   then pass it to parent <Tours/> then to child.


π in Child component we will invoke this function.


