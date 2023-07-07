import React from "react";
import "./Mindfulness.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MindfulnessExercise = () => {
  const mindfulnessExercise = [
    {
      id: 1,
      title: "Breath Awareness",
      description:
        "      Sit comfortably and bring your attention to your breath. Notice the sensation of the breath as it enters and leaves your nostrils or the rise and fall of your abdomen. Simply observe the breath without trying to control or change it. If your mind wanders, gently bring it back to the breath.",
    },
    {
      id: 2,
      title: "Body Scan",
      description:
        "      Lie down or sit in a relaxed position. Begin by focusing your attention on your toes and slowly move your awareness up through your body. Notice any sensations, tension, or areas of relaxation in each part of your body. Take your time and be fully present as you scan from head to toe.",
    },
    {
      id: 3,
      title: "Loving-Kindness Meditation",
      description:
        '      Close your eyes and bring to mind someone you care about deeply. Repeat silently or out loud the following phrases, filling them with genuine intention: "May you be happy. May you be healthy. May you be safe. May you live with ease." Expand your circle of well-wishes by including yourself, loved ones, acquaintances, and eventually all beings.',
    },
    {
      id: 4,
      title: "Mindful Eating",
      description:
        "      Choose a small piece of food, such as a raisin or a slice of fruit. Take a few moments to observe the food with curiosity, noticing its texture, color, and shape. Slowly bring it to your mouth, experiencing the taste and sensations as you chew. Be fully present in the act of eating, savoring each bite mindfully.",
    },
    {
      id: 5,
      title: "Sound Awareness",
      description:
        "      Sit in a quiet place and bring your attention to the sounds around you. Notice the different tones, volumes, and qualities of the sounds. Resist the urge to label or judge the sounds, simply observe them as they come and go. Allow the sounds to anchor you to the present moment.",
    },
    {
      id: 6,
      title: "Mindful Walking",
      description:
        "      Engage in a mindful walking practice, whether indoors or outdoors. Pay attention to the sensation of each step, the movement of your body, and the contact between your feet and the ground. Notice the surroundings, the sights, and sounds, without getting lost in thoughts. Walk slowly and purposefully, fully immersing yourself in the present moment.",
    },
    {
      id: 7,
      title: "Gratitude Practice",
      description:
        "      Take a few moments to reflect on the things you are grateful for. Focus on the small and simple joys in your life, expressing gratitude for them. You can write them down in a gratitude journal or simply contemplate them in your mind. Cultivating gratitude helps shift your attention to the positive aspects of your life and promotes a sense of well-being.",
    },
    {
      id: 8,
      title: "Mindful Communication",
      description:
        "      During conversations, practice mindful communication by fully listening to the person speaking without interrupting or forming judgments. Pay attention to your own words and intentions, speaking with clarity and kindness. Notice the nuances of the conversation, including non-verbal cues. Engage in mindful and respectful interactions with others.",
    },
    {
      id: 9,
      title: "Sensory Awareness",
      description:
        "      Choose one of your senses, such as sight, hearing, touch, taste, or smell, and bring your attention fully to that sense for a few minutes. Explore the details and subtleties of what you perceive through that sense. For example, if you choose sight, observe the colors, shapes, and movements of objects around you. This exercise helps cultivate present-moment awareness.",
    },
    {
      id: 10,
      title: "Mindful Technology Use",
      description:
        "      Practice mindfulness while using technology. Before engaging with your devices, take a moment to set an intention for mindful and purposeful use. Notice any impulses or distractions that arise and consciously choose how you want to engage with technology. Pay attention to the impact it has on your thoughts, emotions, and overall well-being.",
    },
    {
      id: 11,
      title: "Mindful Shower",
      description:
        "      While taking a shower, bring your full attention to the sensory experience. Feel the water cascading over your body, notice the temperature, and the sensation of the water droplets on your skin. Engage your senses in the present moment, allowing the shower to become a mindful and refreshing experience.",
    },
    {
      id: 12,
      title: "Mindful Stretching",
      description:
        "      Engage in gentle stretching exercises while paying close attention to the sensations in your body. Move slowly and deliberately, feeling the stretch in your muscles and joints. Focus on your breath and the connection between your mind and body as you stretch. This practice helps increase body awareness and promotes relaxation.",
    },
    {
      id: 13,
      title: "Mindful Journaling",
      description:
        "      Take a few minutes each day to write in a mindfulness journal. Reflect on your thoughts, emotions, and experiences without judgment. Explore your inner landscape and observe any patterns or insights that arise. Use this practice as an opportunity for self-reflection and self-discovery.",
    },
    {
      id: 14,
      title: "Mindful Photography",
      description:
        "      Grab a camera or use your smartphone to engage in mindful photography. Go for a walk and pay close attention to your surroundings. Notice the details, colors, and textures of the objects and scenes around you. Capture moments that resonate with you and reflect your present-moment awareness.",
    },
    {
      id: 15,
      title: "Mindful Morning Routine",
      description:
        "      Transform your morning routine into a mindful ritual. As you engage in activities such as brushing your teeth, washing your face, or preparing breakfast, bring your full attention to each task. Notice the sensations, smells, and movements involved. Start your day with a sense of presence and intention.",
    },
    {
      id: 16,
      title: "Mindful Listening to Music",
      description:
        "      Choose a piece of music that resonates with you and dedicate some time to listen to it mindfully. Find a comfortable space, close your eyes, and focus on the sounds, melodies, and rhythms. Allow the music to evoke emotions and sensations within you without getting lost in thoughts. Fully immerse yourself in the experience of listening.",
    },
    {
      id: 17,
      title: "Mindful Digital Detox",
      description:
        "      Set aside a specific time to disconnect from digital devices and engage in activities that promote mindfulness, such as reading a book, taking a nature walk, or engaging in creative pursuits. Use this time to cultivate presence, reduce screen time, and reconnect with the physical world around you.",
    },
    {
      id: 18,
      title: "Mindful Breathing Breaks",
      description:
        "      Take short breaks throughout the day to focus on your breath. Pause whatever you're doing and bring your attention to your breath for a few moments. Notice the sensation of the breath entering and leaving your body. Use these mindful breathing breaks as opportunities to reset, recharge, and bring awareness to the present moment.",
    },
    {
      id: 19,
      title: " Mindful Gratitude Walk",
      description:
        "      Go for a walk in nature and make it a mindful gratitude walk. As you walk, pay attention to the beauty around you—the colors, the textures, and the sounds of nature. With each step, express gratitude for something you appreciate in your life. Cultivate a sense of appreciation and connection with the world around you.",
    },
    {
      id: 20,
      title: " Mindful Sleep Preparation",
      description:
        "      Develop a mindful sleep routine by creating a calming environment in your bedroom. Engage in relaxation practices such as gentle stretching, reading a book, or listening to soothing music before bed. Create a peaceful atmosphere and allow yourself to transition into sleep with a sense of mindfulness and relaxation.",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const mindful = mindfulnessExercise.map((mind) => (
    <div className="card">
      <ul>
        <li key={mind.id}>
          <div className="title">
            <h1>{mind.id}</h1>
          </div>
          <div className="step">
            <h3>{mind.title}</h3>
          </div>
          <div className="description">
            <p>{mind.description}</p>
          </div>
        </li>
      </ul>
    </div>
  ));
  return (
    <div className="exercises">
      <h1>Mindfulness Exercises</h1>
      <Carousel showDots={true} responsive={responsive}>
        {mindful}
      </Carousel>
    </div>
  );
};

export default MindfulnessExercise;
