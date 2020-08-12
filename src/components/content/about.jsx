import React from "react";
import Typography from "@material-ui/core/Typography";
import ContainedButtons from "../button/button";
import Paper from "@material-ui/core/Paper";
import s from"./about.module.css"
// import ImageGridList from "./images/images";




const About=()=>{
    return(

        <div className={s.topic}>
<Paper  elevation={3} >

    <Typography paragraph>
        Зыбина Г.Н. биолог. Долгое время она работала педагогом в СПБГУ. Любовь к жизни, природе и наукам о ней придают картинам особое волшебство.
    </Typography> талантливый педагог и живописец, но стала художником только выучив сына. Судьба свела женщину с тем же педагогом, который учмл ее ребенк
    Зыбина -а. Ее картины это творчество человека, который, наконец, стал свободным и осмелился заниматься тем, что любит.
    <Typography paragraph>Философия ее работ впередаче радости и света через цвет и композицию.
        Линия, пятно - все выразительные средства направленны на то чтобы успокоить и преободрить зрителя.
        Это живопись вносит яркие краски в мир. В мастерской художника можно услышать совет "не засеряй жизнь!"
        Это кредо автора, которое значит: "рисуй картину своей жизни яркими и чистыми цветами".

        Художник без устали эсперементриует.
        На пересечении искусства и арттерапии рождаются полотна, облагораживающие жизнь.
    </Typography>
</Paper>


            <ContainedButtons href={"galery"}  name={"посмотреть подробнее"}/>
            <ContainedButtons href={"basket"}  name={"купить"} />


{/*<ImageGridList/>*/}

        </div>


)
    }

export default About;

