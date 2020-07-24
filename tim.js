const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Listens to incoming messages that contain "hello"
app.message('profile allison', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Profile: Allison Crick
  Mini Bio: Hello! I am a Graduate Assistant at Indiana State University in the MBA Program. I graduated in May 2019 with my degree in accounting and marketing. I have work experience in a variety of industries from accounting to technology. My ultimate goal is to become a professor in management or sales.
  Birthday: 7/18
  Work Anniversary: 5/18/20
  Fun Fact: I love to travel! I have been to 15 countries.
  Favorite Sports Team: Indianapolis Colts & Pacers
  Favorite Movie or TV Show? Instant Family
  Hobby: Hiking, Playing/Watching Sports, Playing with My Dog
  Leadership Style - PI: Persuader
  Work Location (state): Indiana`);
});

app.message('profile arie', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Profile: Arie Sztainberg
  Mini bio: Hi! I am a junior at Butler University with a major in MIS and a minor in data science. I was born in New York but was raised in the Chicago suburbs. My goal after college is to live abroad.
  Birthday: 12/20
  Work anniversary: 8/18/18
  Fun fact: I’m trilingual
  Favorite sports team: FC Barcelona
  Favorite TV show/movie? Good Will Hunting
  Hobbies: Soccer, guitar, reading, traveling
  Leadership style - PI: Collaborator
  Work location(State): Chicago
  `);
});

app.message('profile jasonna', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Profile: Jasonna Rogers
  Mini Bio: Hi! I am a junior at Indiana University-Purdue University Indianapolis. My major is Creative Writing and my minor is Criminal Justice. After undergraduate studies, I hope to enter a graduate program for Creative Writing. My goal for after college is to find a career which will allow me to write about topics I am passionate about. 
  Birthday: August 22nd
  Work Anniversary: January 27, 2019
  Fun Fact: I went to France for a missions trip in 2019.
  Favorite Sports Team: University of Kentucky Wildcats 
  Favorite Movie/TV Show: Criminal Minds
  Hobbies: Reading, writing, painting
  Leadership Style-PI: Collaborator
  Work Location (State): Indiana`);
});

app.message('profile rika', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Profile: Rika Shimizu 
  Mini Bio: HI, I am a senior undergraduate student at Rose-Hulman Institute of Technology majoring in Computer Science and double minoring in Art and Robotics. I am from San Jose, California and my goal after graduation is to work with robots. 
  Birthday: 2/3/1999
  Work Anniversary:
  Fun Fact: I am fluent in Japanese
  Favorite Sports Team: Golden State Warriors
  Favorite Movie or TV Show? Parks and Recreation
  Hobby: Hiking and Painting
  Leadership Style - PI:
  Work Location (state): Indiana
  `);
});

app.message('profile rachel', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Profile: Rachel Milford
  Mini Bio: Hello, I am a Junior at Anderson University, double majoring in Cyber Security and Business Information Systems. I also play soccer for the school’s team. My aspiration after college is to become a data analyst.
  Birthday: 08/11/1999
  Work Anniversary: 05/26/2019
  Fun Fact: My family owns a fireworks company.
  Favorite Sports Team: Bayern Munich
  Favorite Movie or TV Show? Sherlock
  Hobby: Playing soccer, hiking or any outdoor activity
  Leadership Style - PI: Venturer
  Work Location (state): Indiana
  `);
});

app.message('profile nick', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Profile: Nicholas Stitely
  Mini Bio: Hey there! I am a senior majoring in computer science and minoring in psychology at Butler University. I grew up in Westminster, Maryland about 45 minutes from Baltimore. I have one younger sister and two younger brothers. Their names are Hannah, William, and Gregg. Hannah, William, and me have all decided to go away to college far from home. My sister goes to school in Vermont and my brother goes to school in Ohio. One day I hope to learn how to sail a boat. 
  Birthday: 12/18/1998
  Work Anniversary: 05/14/2017
  Fun Fact: I have a sister who has never tried an egg. There’s just something in her head that tells her “no, absolutely under any circumstance should I consume this food”. 
  Favorite Sports Team: Baltimore Ravens
  Favorite Movie or TV Show? Letterkenny
  Hobby: Lacrosse
  Leadership Style - PI: Collaborator 
  Work Location (state): Indiana
  `);
});

app.message('profile Allison', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Profile: Allison Crick
  Mini Bio: Hello! I am a Graduate Assistant at Indiana State University in the MBA Program. I graduated in May 2019 with my degree in accounting and marketing. I have work experience in a variety of industries from accounting to technology. My ultimate goal is to become a professor in management or sales.
  Birthday: 7/18
  Work Anniversary: 5/18/20
  Fun Fact: I love to travel! I have been to 15 countries.
  Favorite Sports Team: Indianapolis Colts & Pacers
  Favorite Movie or TV Show? Instant Family
  Hobby: Hiking, Playing/Watching Sports, Playing with My Dog
  Leadership Style - PI: Persuader
  Work Location (state): Indiana`);
});

app.message('profile Arie', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Profile: Arie Sztainberg
  Mini bio: Hi! I am a junior at Butler University with a major in MIS and a minor in data science. I was born in New York but was raised in the Chicago suburbs. My goal after college is to live abroad.
  Birthday: 12/20
  Work anniversary: 8/18/18
  Fun fact: I’m trilingual
  Favorite sports team: FC Barcelona
  Favorite TV show/movie? Good Will Hunting
  Hobbies: Soccer, guitar, reading, traveling
  Leadership style - PI: Collaborator
  Work location(State): Chicago
  `);
});

app.message('profile Jasonna', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Profile: Jasonna Rogers
  Mini Bio: Hi! I am a junior at Indiana University-Purdue University Indianapolis. My major is Creative Writing and my minor is Criminal Justice. After undergraduate studies, I hope to enter a graduate program for Creative Writing. My goal for after college is to find a career which will allow me to write about topics I am passionate about. 
  Birthday: August 22nd
  Work Anniversary: January 27, 2019
  Fun Fact: I went to France for a missions trip in 2019.
  Favorite Sports Team: University of Kentucky Wildcats 
  Favorite Movie/TV Show: Criminal Minds
  Hobbies: Reading, writing, painting
  Leadership Style-PI: Collaborator
  Work Location (State): Indiana`);
});

app.message('profile Rika', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Profile: Rika Shimizu 
  Mini Bio: HI, I am a senior undergraduate student at Rose-Hulman Institute of Technology majoring in Computer Science and double minoring in Art and Robotics. I am from San Jose, California and my goal after graduation is to work with robots. 
  Birthday: 2/3/1999
  Work Anniversary:
  Fun Fact: I am fluent in Japanese
  Favorite Sports Team: Golden State Warriors
  Favorite Movie or TV Show? Parks and Recreation
  Hobby: Hiking and Painting
  Leadership Style - PI:
  Work Location (state): Indiana
  `);
});

app.message('profile Rachel', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Profile: Rachel Milford
  Mini Bio: Hello, I am a Junior at Anderson University, double majoring in Cyber Security and Business Information Systems. I also play soccer for the school’s team. My aspiration after college is to become a data analyst.
  Birthday: 08/11/1999
  Work Anniversary: 05/26/2019
  Fun Fact: My family owns a fireworks company.
  Favorite Sports Team: Bayern Munich
  Favorite Movie or TV Show? Sherlock
  Hobby: Playing soccer, hiking or any outdoor activity
  Leadership Style - PI: Venturer
  Work Location (state): Indiana
  `);
});

app.message('profile Nick', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Profile: Nicholas Stitely
  Mini Bio: Hey there! I am a senior majoring in computer science and minoring in psychology at Butler University. I grew up in Westminster, Maryland about 45 minutes from Baltimore. I have one younger sister and two younger brothers. Their names are Hannah, William, and Gregg. Hannah, William, and me have all decided to go away to college far from home. My sister goes to school in vermont and my brother goes to school in Ohio. One day I hope to learn how to sail a boat. 
  Birthday: 12/18/1998
  Work Anniversary: 05/14/2017
  Fun Fact: I have a sister who has never tried an egg. There’s just something in her head that tells her “no, absolutely under any circumstance should I consume this food”. 
  Favorite Sports Team: Baltimore Ravens
  Favorite Movie or TV Show? Letterkenny
  Hobby: Lacrosse
  Leadership Style - PI: Collaborator 
  Work Location (state): Indiana
  `);
});

app.message('commands', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Type: 'profile <user>' in order to view a user's information.
  Type: 'profiles' to get a list of current existing profiles.`);
});

app.message('profiles', async ({ message, say }) => {
  await say(`Existing profiles: Allison, Arie, Jasonna, Rachel, Rika, Nick.`);
});



(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();