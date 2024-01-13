import HomeLayout from "../layout/HomeLayout";
import H1 from "../components/H1";


export default function Index() {


    return (
        <HomeLayout>

            <section 
                id="welcome"
                className="grid gap-6 max-w-2xl mx-auto"
            >

                <H1>Home</H1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem at tempore consectetur provident saepe ullam quod assumenda consequuntur, cumque vel atque nihil repellat ipsa et necessitatibus? Deleniti eos qui reiciendis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem at tempore consectetur provident saepe ullam quod assumenda consequuntur, cumque vel atque nihil repellat ipsa et necessitatibus? Deleniti eos qui reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, delectus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem at tempore consectetur provident saepe ullam quod assumenda consequuntur, cumque vel atque nihil repellat ipsa et necessitatibus? Deleniti eos qui reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum unde earum repudiandae odit veritatis debitis ut cumque necessitatibus ducimus rerum.</p>

            </section>

            <section 
                id="about"
                className="grid gap-6 max-w-2xl mx-auto mt-16"
            >

                <H1>Home</H1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem at tempore consectetur provident saepe ullam quod assumenda consequuntur, cumque vel atque nihil repellat ipsa et necessitatibus? Deleniti eos qui reiciendis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem at tempore consectetur provident saepe ullam quod assumenda consequuntur, cumque vel atque nihil repellat ipsa et necessitatibus? Deleniti eos qui reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, delectus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem at tempore consectetur provident saepe ullam quod assumenda consequuntur, cumque vel atque nihil repellat ipsa et necessitatibus? Deleniti eos qui reiciendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum unde earum repudiandae odit veritatis debitis ut cumque necessitatibus ducimus rerum.</p>

            </section>

        </HomeLayout>
    )
}