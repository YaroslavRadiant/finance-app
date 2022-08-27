
# React Test Task

v 0.1.0 

As a bonus, a display of changes in prices with colors and arrows has been added. Added possibility to add/remove ticker from watching group.
I also planned that it would be possible to go to the page of each individual ticker, on which there should have been graphs of price changes from the redux. This did not work due to the fact that when unmounting the component, I could not start the socket again with a new mount. How to solve this problem?

Also no tests, didn't write tests with redux before :(


v 0.2.0 

Initialization of websockets is moved to a higher level.

1. All functions are wrapped in useMemo and their values are transferred to the layout, a utils folder was created for individual functions, but it is illogical to transfer functions from old components there because of the use of state and other data in them, which are import too.
3. A component with charts has been implemented. Since I am working with this library for the first time, I am sure that the component can be refactored.
