# Redux

1. install packages:

   1. react-redux
   2. @reduxjs/toolkit

2. Create Store - configureStore()

   # configureStore has 1 argument: reducer

3. Export store

4. Wrap App in main.jsx with Provider from react-redux

5. Create clice - createSlice()

   # createSlice takes 3 arguments: name,initialValue,reducer

   # define your functions in reducer as objects

6. Export reducer and actions (reducer is initialState, actions are functions in reducer(destructure them and export))

7. Import reducer in store

8. Update reducer in store with import from slice

9. # to read data from other components -- useSelector()
   # to update data from other components -- useDispatch()
