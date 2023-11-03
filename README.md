# Nithin_Quicksell_Assignment

The website can be viewed using link https://nithin1807.github.io/Nithin_Quicksell_Assignment/


#NOTE  : The complete node module files are given on the master branch .In case any files are missing the required files can be downloaded from that or PLEASE INSTALL NODE MODULES USING TERMINAL BEFORE RUNNING THE PROJECT.


#MAIN OUTCOME OF ASSIGNMENT

#1.User availabilty status is given by using the red and green lights.Red light shows user is unavailable(Availabilty==False) Green light indicates(User aavailable==True)

#2.The Priority icon ,user availabilty icon,status icon are included in the dashboard itself.

#3.Display box is used for selecting grouping and ordering

#4.Ordering of results based on priority and title



#ICONS AND SYMBOLS

     No priority:  0: '…'
    
    Low Priority:  1: '▂'
    
         Medium :  2: '▅'
    
            High:  3: '▉'
    
          Urgent:  4: '⚠️'

         In progress:   ◐
          
             Backlog:   ⦿
              
                Todo:   〇




          


#ASSIGNMENT

Created an interactive Kanban board application using React JS that interacts with the provided API from  https://api.quicksell.co/v1/internal/frontend-assignment

When a user clicks the "display" button and selects a grouping option, the Kanban board should dynamically adjust to reflect the user's choice.

The application should offer three distinct ways to group the data:

1. **By Status**: Group tickets based on their current status.
2. **By User**: Arrange tickets according to the assigned user.
3. **By Priority**: Group tickets based on their priority level.

Users should also be able to sort the displayed tickets in two ways:

1. **Priority**: Arrange tickets in descending order of priority.
2. **Title**: Sort tickets in ascending order based on their title.

**The priority levels for the tickets are as follows:**

- Urgent (Priority level 4)
- High (Priority level 3)
- Medium (Priority level 2)
- Low (Priority level 1)
- No priority (Priority level 0)

**Priority levels: (This values you will receive in the api)**

4 - Urgent

3 - High

2 - Medium

1 - Low

0 - No priority
