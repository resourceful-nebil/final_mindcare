import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Mindfulness.css";

const RelaxationExercise = () => {
  const relaxationExercise = [
    {
      id: 1,
      title: "Muscle Relaxation",
      description:
        "Start by finding a comfortable position. Close your eyes and focus on your breathing. Begin to tense and relax different muscle groups in your body, starting from your toes and working your way up to your head. Hold the tension for a few seconds, then release and relax the muscles completely. Feel the sensation of relaxation as you let go of any tension in your body.",
    },
    {
      id: 2,
      title: "Guided Imagery",
      description:
        "Find a quiet place and close your eyes. Imagine yourself in a peaceful and serene environment, such as a beautiful beach or a tranquil forest.Engage your senses and vividly imagine the sights, sounds, smells, andsensations of this place. Allow yourself to fully immerse in theexperience and let go of any stress or worries.",
    },
    {
      id: 3,
      title: "Deep Breathing",
      description:
        "Sit or lie down in a comfortable position. Close your eyes and take adeep breath in through your nose, filling your lungs with air. Hold yourbreath for a few seconds, then exhale slowly through your mouth,releasing any tension or stress. Repeat this deep breathing patter several times, focusing on each breath and allowing your body and mind to relax with each exhale.",
    },
    {
      id: 4,
      title: "Body Scan Relaxation",
      description:
"      Lie down in a comfortable position and close your eyes. Begin to bring your attention to different parts of your body, starting from your toesand moving upward. Notice any areas of tension or discomfort and consciously release the tension as you exhale. Move slowly up through your body, relaxing each muscle group and letting go of any stress or tightness."    },
{
      id: 5,
      title: "Guided Meditation",
      description:
"      Find a guided meditation audio or video that focuses on relaxation and stress reduction. Follow along with the instructions, allowing yourself to be guided into a state of deep relaxation. Focus on your breath, let go of any thoughts or distractions, and surrender to the calming guidance of the meditation."    },
    {
      id: 6,
      title: "Progressive Relaxation Visualization",
      description:
"      Close your eyes and imagine yourself in a peaceful setting, such as a meadow or a mountaintop. Begin to visualize the progressive relaxation technique, starting from your toes and moving up to your head. As you mentally focus on each muscle group, imagine them becoming deeply relaxed, releasing any tension or tightness. Feel the soothing sensation of relaxation spreading throughout your body."    },
    {
      id: 7,
      title: "Sensory Grounding Exercise",
      description:
"      Sit or lie down comfortably and take a few deep breaths. Begin to bring your attention to your senses, one by one. Notice five things you can see, four things you can touch, three things you can hear, two things you can smell, and one thing you can taste. Engaging your senses in this way helps bring your focus to the present moment and promotes a state of relaxation."    },
    {
      id: 8,
      title: "Autogenic Training",
      description:
"      Close your eyes and focus on your breath. Slowly repeat a series of calming statements to yourself, such as \"My body is relaxed,\" \"My breath is calm,\" or \"I am at peace.\" As you repeat these statements, imagine the sensations of relaxation and tranquility flowing through your body. Allow yourself to become fully immersed in the experience of deep relaxation."    },
    {
      id: 9,
      title: "Mindful Walking",
      description:
"      Find a quiet outdoor space and start walking slowly and mindfully. Pay attention to each step, the feeling of your feet touching the ground, and the movement of your body. Notice the sights, sounds, and sensations around you. Engage all your senses in the present moment, allowing yourself to feel a sense of peace and calm as you connect with nature."    },
    {
      id: 10,
      title: "Progressive Relaxation with Affirmations",
      description:
"      Begin with the progressive muscle relaxation technique, tensing and releasing each muscle group. As you relax each muscle, repeat a positive affirmation related to relaxation and well-being. For example, as you release tension in your shoulders, you can repeat the affirmation \"I am letting go of stress and embracing relaxation.\" Combine the physical relaxation with affirmations to enhance the overall relaxation experience."    },
    {
      id: 11,
      title: "Mindful Breathing with Counting",
      description:
"      Find a comfortable position and close your eyes. Take a deep breath in through your nose, counting to four. Hold your breath for a moment, then exhale slowly through your mouth, counting to six. Focus your attention on the counting and the sensation of your breath as you repeat this breathing pattern for several minutes. This exercise helps calm the mind and bring a sense of relaxation."    },
    {
      id: 12,
      title: "Yoga or Stretching Routine",
      description:
"      Engage in a gentle yoga or stretching routine to release tension from your body and promote relaxation. Follow a guided video or practice your favorite stretches, paying attention to your breath and the sensations in your body. Move mindfully, allowing the stretches to ease any tightness and bring a sense of calmness to both your body and mind."    },
    {
      id: 13,
      title: "Nature Walk or Outdoor Meditation",
      description:
"      Take a leisurely walk in nature or find a peaceful outdoor spot to meditate. Connect with the natural environment around you, observing the beauty of the surroundings. Pay attention to the sounds, smells, and sensations in nature, allowing them to bring a sense of tranquility and relaxation. Use this time to rejuvenate and recharge amidst the calming influence of the outdoors."    },
    {
      id: 14,
      title: "Journaling and Reflection",
      description:
"      Set aside some time for reflective journaling. Write down your thoughts, feelings, and any sources of stress or worries. Allow the act of writing to serve as a form of release and self-expression. Afterward, read over what you've written and reflect on your experiences. Use this opportunity to gain insight, practice self-compassion, and find a greater sense of clarity and calmness."    },
    {
      id: 15,
      title: "Progressive Relaxation Music",
      description:
"      Find a comfortable space, close your eyes, and listen to soothing music specifically designed for relaxation. Focus on the calming melodies, allowing them to guide you into a state of deep relaxation. Combine this with the progressive relaxation technique, starting from your toes and moving up through your body, releasing tension and stress with each breath."    },
    {
      id: 16,
      title: "Aromatherapy",
      description:
"      Use essential oils or scented candles to create a calming atmosphere. Choose scents known for their relaxation properties, such as lavender, chamomile, or bergamot. Inhale the aroma deeply, allowing it to soothe your senses and promote a sense of calmness and relaxation."    },
    {
      id: 17,
      title: "Mindful Eating",
      description:
"      Take time to eat a meal or snack mindfully, paying attention to the taste, texture, and aroma of each bite. Slow down your eating pace, savoring each mouthful and fully engaging your senses. Eating mindfully can help reduce stress, promote better digestion, and enhance the overall enjoyment of food."    },
    {
      id: 18,
      title: "Progressive Relaxation Techniques",
      description:
        "Progressive relaxation techniques involve systematically tensing and relaxing muscle groups to promote physical and mental relaxation. Start from your toes and work your way up to your head, focusing on each muscle group as you tense and then release the tension.",
    },
    {
      id: 19,
      title: " Breathing Visualization",
      description:
"      Close your eyes and imagine your breath as a wave flowing in and out. With each inhalation, visualize a wave of calmness and relaxation entering your body. As you exhale, imagine any stress or tension being carried away by the wave. Continue this visualization, syncing your breath with the calming imagery."    },
    {
      id: 20,
      title: "Laugh Therapy",
      description:
"      Watch or listen to something that makes you laugh, such as a comedy show or a funny podcast. Laughter has been shown to reduce stress and release endorphins, promoting a positive mood and overall relaxation. Allow yourself to enjoy a good laugh and let go of stress."    },
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
  const relax = relaxationExercise.map((relx) => (
    <div className="card">
      <ul>
        <li key={relx.id}>
          <div className="title">
            <h1>{relx.id}</h1>
          </div>
          <div className="step">
            <h3>{relx.title}</h3>
          </div>
          <div className="description">
            <p>{relx.description}</p>
          </div>
        </li>
      </ul>
    </div>
  ));
  return (
    

      <div className="exercises">
      <h1>Relaxation Exercises</h1>
      <Carousel showDots={true} responsive={responsive}>
        {relax}
      </Carousel>
      </div>
  );
};

export default RelaxationExercise;
