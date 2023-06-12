import './SliderSlick.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Slider from "react-slick";
import Avatar from '../../components/Avatar/Avatar';
import IconBox from '../IconBox/IconBox';

const SliderSlick = () => {
    const [nav2, setNav2] = useState();

    return (
        <div>
            <Slider
              asNavFor={nav2}
              ref={slider2 => setNav2(slider2)}
              slidesToShow={6}
              swipeToSlide={true}
              focusOnSelect={true}
              infinite= {true}
              dots= {false}
              speed= {500}
              responsive = {[
                
                {
                  breakpoint: 1440,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                  }
                },
                
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]}
            >
              <IconBox experience="Senior" img="/images/skills/html.svg">HTML5</IconBox>
              <IconBox experience="Senior" img="/images/skills/css-3.svg">Css3</IconBox> 
              <IconBox experience="Senior" img="/images/skills/bootstrap-5.svg">Bootstrap 5</IconBox> 
              <IconBox experience="Senior" img="/images/skills/sass.svg">Sass</IconBox> 
              <IconBox experience="Mid-Level" img="/images/skills/tailwind-css.svg">Tailwind</IconBox> 
              <IconBox experience="Mid-Level" img="/images/skills/javascript.svg">JavaScript</IconBox> 
              <IconBox experience="Jounior" img="/images/skills/react.svg">React</IconBox> 
              <IconBox experience="Jounior" img="/images/skills/git.svg">Git</IconBox> 
              <IconBox experience="Jounior" img="/images/skills/github.svg">Github</IconBox> 
              <IconBox experience="Jounior" img="/images/skills/gitlab.svg">Gitlab</IconBox> 
            </Slider>
        </div>
    );
};

export default SliderSlick;
