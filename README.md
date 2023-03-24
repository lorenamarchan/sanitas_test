# Test_app

Test page that reproduces:

- optimal rendering for 4000 image card components with scroll
- filtering the cards by ID, text

---

This project has 2 pages with 2 different apporaches:
- `http://localhost:4200/paginator`:
   - offers a page with a pagination for the list elements, as a way of lighten the render of the list.
- `http://localhost:4200/scroll`:
  - offers a page with all list element on sight, with a virtual scroll to optimize the performance.

----

### Serving the project

1. Open a terminal and clone the repository `git clone git@github.com:lorenamarchan/sanitas_test.git` 
2. Locate to cloned repository root folder (test_app)
3. Run command `ng serve`
4. Go to `http://localhost:4200/paginator` to check pagination approach
5. Go to `http://localhost:4200/scroll` to check scroll approach

----

### Unit testing 
1. Open a terminal and locate to cloned repository root folder (test_app)
2. Run command `ng test`

----

### E2E testing
1. Open a terminal and locate to cloned repository root folder (test_app)
2. Run command `ng e2e`

----

### Deployed Repository
1. Open a terminal and locate to cloned repository root folder (test_app)
2. Run command `ng build`
