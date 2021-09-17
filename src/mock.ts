const data : { 
    id: string,
    question: string,
    alternatives: {
      id: string,
      text: string,
      score: number
    }[] 
  }[] = [
  {
    id: '1', 
    question: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
    alternatives: [
      { id: '1', text: 'Don’t dare to interrupt them', score: 1 },
      { id: '2', text: 'Think it’s more important to give them some of your time; work can wait', score: 2 },
      { id: '3', text: 'Listen, but with only with half an ear', score: 3 },
      { id: '4', text: 'Interrupt and explain that you are really busy at the moment', score: 4 },
    ],
  },
  {
    id: '2',
    question: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
    alternatives: [
      { id: '1', text: 'Look at your watch every two minutes', score: 1 },
      { id: '2', text: 'Bubble with inner anger, but keep quiet', score: 2 },
      { id: '3', text: 'Explain to other equally impatient people in the room that the doctor is always running late', score: 3 },
      { id: '4', text: 'Complain in a loud voice, while tapping your foot impatiently', score: 4 },
    ],
  },
  {
    id: '3',
    question: 'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
    alternatives: [
      { id: '1', text: 'Don’t dare contradict them', score: 1 },
      { id: '2', text: 'Think that they are obviously right', score: 2 },
      { id: '3', text: 'Defend your own point of view, tooth and nail', score: 3 },
      { id: '4', text: 'Continuously interrupt your colleague', score: 4 },
    ],
  },
  {
    id: '4', 
    question: 'You are taking part in a guided tour of a museum. You:',
    alternatives: [
      { id: '1', text: 'Are a bit too far towards the back so don’t really hear what the guide is saying', score: 1 },
      { id: '2', text: 'Follow the group without question', score: 2 },
      { id: '3', text: 'Make sure that everyone is able to hear properly', score: 3 },
      { id: '4', text: 'Are right up the front, adding your own comments in a loud voice', score: 4 }
    ],
  },
  {
    id: '5', 
    question: 'During dinner parties at your home, you have a hard time with people who:',
    alternatives: [
      { id: '1', text: 'Ask you to tell a story in front of everyone else', score: 1 },
      { id: '2', text: 'Talk privately between themselves', score: 2 },
      { id: '3', text: 'Hang around you all evening', score: 3 },
      { id: '4', text: 'Always drag the conversation back to themselves', score: 4 },
    ],
  },
  {
    id: '6', 
    question: 'You crack a joke at work, but nobody seems to have noticed. You:',
    alternatives: [
      { id: '1', text: 'Think it’s for the best — it was a lame joke anyway', score: 1 },
      { id: '2', text: 'Wait to share it with your friends after work', score: 2 },
      { id: '3', text: 'Try again a bit later with one of your colleagues', score: 3 },
      { id: '4', text: 'Keep telling it until they pay attention', score: 4 },
    ],
  },
  {
    id: '7', 
    question: 'This morning, your agenda seems to be free. You:',
    alternatives: [
      { id: '1', text: 'Know that somebody will find a reason to come and bother you', score: 1 },
      { id: '2', text: 'Heave a sigh of relief and look forward to a day without stress', score: 2 },
      { id: '3', text: 'Question your colleagues about a project that’s been worrying you', score: 3 },
      { id: '4', text: 'Pick up the phone and start filling up your agenda with meetings', score: 4 },
    ],
  },
  {
    id: '8', 
    question: 'During dinner, the discussion moves to a subject about which you know nothing at all. You:',
    alternatives: [
      { id: '1', text: 'Don’t dare show that you don’t know anything about the subject', score: 1 },
      { id: '2', text: 'Barely follow the discussion', score: 2 },
      { id: '3', text: 'Ask lots of questions to learn more about it', score: 3 },
      { id: '4', text: 'Change the subject of discussion', score: 4 }
    ],
  },
  {
    id: '9', 
    question: 'You’re out with a group of friends and there’s a person who’s quite shy and doesn’t talk much. You:',
    alternatives: [
      { id: '1', text: 'Notice that they’re alone, but don’t go over to talk with them', score: 1 },
      { id: '2', text: 'Go and have a chat with them', score: 2 },
      { id: '3', text: 'Shoot some friendly smiles in their direction', score: 3 },
      { id: '4', text: 'Hardly notice them at all', score: 4 },
    ],
  },
  {
    id: '10', 
    question: 'At work, somebody asks for your help for the hundredth time. You:',
    alternatives: [
      { id: '1', text: 'Give them a hand, as usual', score: 1 },
      { id: '2', text: 'Accept — you’re known for being helpful', score: 2 },
      { id: '3', text: 'Ask them, please, to find somebody else for a change', score: 3 },
      { id: '4', text: 'Loudly make it known that you’re annoyed', score: 4 },
    ],
  },
  {
    id: '11', 
    question: 'You’ve been see a movie with your family and the reviews are mixed. You:',
    alternatives: [
      { id: '1', text: 'Don’t share your point of view with anyone', score: 1 },
      { id: '2', text: 'Didn’t like the film, but keep your views to yourself when asked', score: 2 },
      { id: '3', text: 'State your point of view with enthusiasm', score: 3 },
      { id: '4', text: 'Try to bring the others round to your point of view', score: 4}
    ],
  },
  {
    id: '12', 
    question: 'A friend arrives late for your meeting. You:',
    alternatives: [
      { id: '1', text: 'Say, ‘It’s not a problem,’ even if that’s not what you really think', score: 1 },
      { id: '2', text: 'Give them a filthy look and sulk for the rest of the evening', score: 2 },
      { id: '3', text: 'Tell them, ‘You’re too much! Have you seen the time?’', score: 3 },
      { id: '4', text: 'Make a scene in front of everyone', score: 4 },
    ],
  },
  {
    id: '13', 
    question: 'You can’t find your car keys. You:',
    alternatives: [
      { id: '1', text: 'Don’t want anyone to find out, so you take the bus instead', score: 1 },
      { id: '2', text: 'Panic and search madly without asking anyone for help', score: 2 },
      { id: '3', text: 'Grumble without telling your family why you’re in a bad mood', score: 3 },
      { id: '4', text: 'Accuse those around you for misplacing them', score: 4 }
    ],
  },
  {
    id: '14', 
    question: 'It’s time for your annual appraisal with your boss. You:',
    alternatives: [
      { id: '1', text: 'Go with great hesitation as these sessions are torture for you', score: 1 },
      { id: '2', text: 'Look forward to hearing what your boss thinks about you and expects from you', score: 2 },
      { id: '3', text: 'Rehearse ad nauseam the arguments and ideas that you’ve prepared for the meeting', score: 3 },
      { id: '4', text: 'Go along unprepared as you are confident and like improvising', score: 4 },
    ],
  },
]

const maxScore = data.reduce((acc, { alternatives }) =>  acc+ alternatives.reduce((acc, { score }) => acc + score,0),0)

export {
  maxScore,
  data
}