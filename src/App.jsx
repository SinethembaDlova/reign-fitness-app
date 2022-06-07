// ROUTER ######################################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
// 1.2. END ....................................................................

// 1.3. CONSTANTS ..............................................................
// 1.3. END ....................................................................

// 1.4. ACTIONS ................................................................
// 1.4. END ....................................................................

// 1.5. STYLES .................................................................
// 1.5. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function App () {
  // 2.1. HOOKS ................................................................
  // 2.1. END ..................................................................

  // 2.2. RENDER ...............................................................

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<h2> Hello Home</h2>}></Route>
        <Route
          exact
          path="/memberships"
          element={<h2> Hello Memberships</h2>}
        >
        </Route>
        <Route
          exact
          path="/memberships/:id"
          element={<h2> Hello Memmbership</h2>}
        >
        </Route>
      </Routes>
    </Router>
  );

  // 2.2. END ..................................................................
}

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. REDUX ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4.1. MAP STATE TO PROPS .....................................................
// 4.1. END ....................................................................

// 4.2. MAP DISPATCH TO PROPS ..................................................
// 4.2. END ....................................................................

// 4. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default App;

// END OF FILE #################################################################

