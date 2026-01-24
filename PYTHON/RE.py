import re

pattern = r"[A-z]+ython"
text = '''


NP

Skip navigation
Search



Create


Avatar image
Next:
Exercise 10: News App in Python | Python Tutorial - Day #90
Watch Later
1/342

Regular Expressions in Python | Python Tutorial - Day #95

CodeWithHarry
9.36m subscribers

Subscribe

5.1k


Share

Ask

231k views  2 years ago  Python for Beginners (Full Course) | #100DaysOfCode Programming Tutorial in Hindi
Access the Playlist:    • Python for Beginners (Full Course) | #100D...  
Link to the Repl: https://replit.com/@codewithharry/95-...
Join Replit the browser-based IDE used in this course - https://join.replit.com/code-with-har... …

All

From the series

From CodeWithHarry

Computer programming

Presentations

Learning

Related


10:29
AsyncIO in Python | Python Tutorial - Day #96
CodeWithHarry
130k views
•
2 years ago


1:13:29
Regular Expression (RegEX) in Python - Complete Tutorial
WsCube Tech
82k views
•
3 years ago


Recommendations not quite right?
When you turn on watch history, you'll get more personalised recommendations.

Leave history off

Turn on history
10:43
REGEX (REGULAR EXPRESSIONS) WITH EXAMPLES IN DETAIL | Regex Tutorial
Crack Concepts
955k views
•
6 years ago

20:42
US To Attack Greenland Soon? | NATO Split Wide Open Over Trump’s 'Takeover' Threat | Akash Banerjee
The Deshbhakt
641k views
•
14 hours ago
New

100 lessons
Python for Beginners (Full Course) | #100DaysOfCode Programming Tutorial in Hindi
CodeWithHarry
•
Course
View full course

15:54
Introduction to OOPs in Python | Python Tutorial - Day #56
CodeWithHarry
485k views
•
2 years ago

25:29
Regular Expression Tutorial Python | Python Regex Tutorial
codebasics
189k views
•
4 years ago

9 lessons
Python Language Full Course (2025-26)
Shradha Khapra
•
Course
View full course

12:52
WHAT? Dhruv Rathee Cheated His Wife?, Fukra Insaan’s Chats Leaked?, Yo Yo Honey Singh, Arnab Goswami
NeuzBoy
195k views
•
14 hours ago
New

24:52
How to Start Coding ? Learn Programming for Beginners | 2026
Apna College
251k views
•
8 days ago

18:10
The Hunt for India's Most Wanted Te*riorist in Nepal
The Nepali Comment
271k views
•
2 days ago
New

17:20
I Visited GUNDU To Meet KP Oli...
IDS Media Network
60k views
•
1 day ago
New

27:50
Inside the room of a s*x worker! 😵
KK Create
10m views
•
12 days ago
Dubbed

21:18
Warning: You Might Want to Replace Your Laptop After Watching This!
Venom's Tech
522k views
•
1 month ago

13:55
Top 5 Programming Languages to learn in 2026! (Important)
CodeWithHarry
358k views
•
1 month ago

13:23
Regular Expressions in Python || Python Tutorial || Learn Python Programming
Socratica
117k views
•
3 years ago

17:39
Regular Expressions | Python Tutorials For Absolute Beginners In Hindi #86
CodeWithHarry
191k views
•
7 years ago

9:24
Is This The Best Skill to Learn in 2026?
CodeWithHarry
249k views
•
2 weeks ago

21:32
USA vs Venezuela | How Delta Force Commandos Captured Maduro? | Dhruv Rathee
Dhruv Rathee
9.2m views
•
4 days ago
New

17:49
Multithreading in Python | Python Tutorial - Day #97
CodeWithHarry
180k views
•
2 years ago


Show more
134 Comments
Abinash Regmi
Add a comment…

@AshokSharma-kp3br
2 years ago
Please start Django Tutorial complete beginner to Advance 

10


Reply


@priyanshujalan99
2 years ago (edited)
Bro only 5 days to go! But I think ye course kabi khatam hi nahi hona chahiye! ️️

95


Reply


2 replies

@Harsh-pt1sk
2 years ago
5 days to go !!! Man feels like I just started yesterday 
Thanks harry bhai!!!!!!!

69



Reply


2 replies

@CalisthenixDivanshu
2 years ago (edited)
Harry bhai python web development with html,css and javascript python as backend tutorial

7


Reply


@ukriss
2 years ago
Could you please cover the following topics:
Hi Harry! 
Good Job. Keep it up! 
1) Garbage Collection
2) Destructor Method
3) RegX
4) Multi-Threading
5) Unit -Testing
6) Debugging Funda
7) Pickling

Some how these areas were missed in your erstwhile Python Courses.  Thanks for the Great Efforts. ~ 4M subscribers you have will be ever grateful!

63


Reply


1 reply

@Govinda_Chaudhary_9
2 years ago
Code days 1000 days ka hona chahiye tha bhut acha lagta h padna Harry bhai se 

3


Reply


@npnggaming3865
2 years ago
Alhamdulliallah bhai apki waja se Maine pura WordPress Sikh liya love u

5


Reply


@narendraparmar1631
2 years ago
Thanks Harry Bhai for your efforts.

2


Reply


@MarshooGAMING
2 years ago
Very Beginner friendly 

3


Reply


@harshjaiswal1634
2 years ago (edited)
Hats off to your consistency ️

15



Reply


@sayanisen6685
1 year ago
Please make a updated course on tkinter in python, Harry bhaiya. Thank you for this brilliant course.

3


Reply


@TOXIC_PLUTO
5 months ago
its 95 days omg  , saare dekhliye maine abhi tak videos!

1


Reply


@jyotirathore2040
2 years ago
Sir will you cover searching and sorting in python

3


Reply


@abdulbaqi4584
2 years ago
Hey Harry, Please make video tutorials of GSAP and ThreeJS.. Thanks in advance 

3


Reply


@Divyanshu_Singh_Bhumihar
2 years ago
Dil jiit liyee

2


Reply


@vishalbharakhada3357
11 months ago
thank you sir for this video

1


Reply


@Asra.Fareed
5 months ago
amazing 



Reply


@24programmer10
2 years ago
You are superhero for any person who want to be a programmer in their life️

5


Reply


@16_sokhal_4
2 years ago
Harry Sir 
You are my inspirational and i can learn a lot from you sir.

2


Reply


@mannpandey472
2 years ago
Nice thanks for your valuable vedios sir.



Reply

    



'''

# match=re.search(pattern,text)
# print(match)

matches=re.finditer(pattern,text)
for match in matches:
    print(type(match.span()))
    print(match.span()[0])
    print(text[match.span()[0]:match.span()[1]])