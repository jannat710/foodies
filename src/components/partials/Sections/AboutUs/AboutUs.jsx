import Button from "../../Elements/Button/Button"


function AboutUs() {
  return (
    <div className="px-20 py-20 h-fit bg-slate-950 w-full">
        <div className="w-1/2 mx-auto">
        <h1>About <span>Us</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique unde iure laborum molestias repudiandae vel sunt animi nulla obcaecati ipsa, quam delectus officiis, dolorum a, autem labore velit alias!</p>
        <Button text={'Order Now'}/>
        </div>
    </div>
  )
}

export default AboutUs