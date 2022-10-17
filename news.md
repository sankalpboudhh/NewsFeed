OVERVIEW
VenueMonk team solves a plethora of challenging and exciting problem statements for our
customers.
The current assignment is meant:

1. Frontend Development
   Problem Statements
   You are required to solve a problem that is part of the most popular inShorts App. You are
   required to write relevant code to achieve the following goals to show news for a hypothetical
   app:

GOALS

1. To add the list of news in a chronological order as per published date.
2. The news must be stacked in a way that news that has not been unread by the user will
   always be on the top.

SPECIFICATIONS
You are required to create a stack list of entry called news. It would contain a news article with
relevant information like image, title, subtitle, author name, published date etc. News will be
arranged in a manner such that any item that has been read by the user will go down while any
news that is not yet unread will be stacked to the top of the reading list.
Logic:

1. News will be added and arranged as a stack.
2. Article to be marked as read as the user keeps reading them during the session.
3. The order of the article gets loaded when a new session is loaded, and it stays the same.
   The order only changes when the session is refreshed.
   Assume the following articles are present in the database.

Article Publish Date & Time
News 1 7 July 08:00

News 2 8 July 08:00
News 3 9 July 22:00
News 4 10 July 08:00
News 5 10 July 15:00
News 6 10 July 18:00
News 7 11 July 08:00
News 8 13 July 10:00
News 9 14 July 11:00
First Visit (no news is read) 1

1. On swiping left the user should see news in the chronological order starting from the
   latest news
2. News articles gets marked read immediately on view
   Next Visit
3. If the user leaves and comes back later at another time, all the news articles they have
   seen before will be considered to be read.
4. The read articles in the previous visit must be arranged from latest to oldest before the
   current latest news and will only be seen by right swiping initially eg in event 10 in the
   sample given below the latest news at the time is News 7 and the news which were read
   in the previous visit comes before this which is New 4, News 3 up to News 1
5. Swiping left is the same as in the previous case 4
6. On swiping right if the user has read some news articles in their previous visit, the news
   is arranged in such a manner that the latest news amongst them is shown first

Submission
You are required to make relevant frontend application to do the following :

1. Get list of news as per the above record and show the same in the UI.
2. Manage a way to update a “read” for any of the news article that the user
   visits/reads/clicks.
3. Any other relevant API that you feel is needed to complete the task in the Frontend.
   Please submit the project folder created in a zip file sent via a google drive or dropbox open link
   with your name as FULL_NAME_PROFILE_APPLIED-YEAR_APPLIED.zip to hr@venuemonk.com.
   The problem statement is a real live problem from our Problem stack. Please submit completed
   solutions before the assigned deadline.

Cheers! All the best!
