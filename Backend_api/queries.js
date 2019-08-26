const Pool = require('pg').Pool;
const pool = new Pool({
  user: '',
  host: '',
  database: '',
  password: '',
  port: 5432
});

const getUsers = (request, response) => {
  pool.query(
    'SELECT * FROM user_data ORDER by username ASC',
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getUserByUid = (request, response) => {
  const { uid } = request.body;

  pool.query(
    'SELECT * FROM user_data WHERE uid = $1',
    [uid],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getItembyUser = (request, response) => {
  const user_id = request.params.user_id;

  pool.query(
    'SELECT * FROM products user_id = $1',
    [user_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );

  pool.query();
};

const getProducts = (request, response) => {
  pool.query(
    'SELECT * FROM products ORDER by product_name ASC',
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const loginUser = (req, response) => {
  const { uname, password } = req.body;

  pool.query(
    'SELECT * FROM public.user_data WHERE username = $1 AND password = crypt( $2, password);',
    [uname, password],
    (err, res) => {
      if (err) {
        throw console.error();
      }
      response.status(200).json(res.rows);
    }
  );
};

const productUpload = (request, response) => {
  const {
    user_id,
    product_category,
    username,
    product_price,
    product_retail,
    product_description,
    product_name,
    product_picture
  } = request.body;

  pool.query(
    'INSERT INTO public.products(user_id, product_category, username, product_price, product_retail, product_description, product_name, product_picture )' +
    'VALUES ($1, $2, $3, $4, $5, $6, $7, $8);',
    [
      user_id,
      product_category,
      username,
      product_price,
      product_retail,
      product_description,
      product_name,
      product_picture
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send({ response: 'It worked!' });
    }
  );
};

const createUser = (request, response) => {
  const {
    username,
    password,
    first_name,
    last_name,
    email,
    phone_num,
    address,
    city,
    state,
    country,
    postalcode,
    profile_pic
  } = request.body;

  pool.query(
    'SELECT createuser ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
    [
      username,
      password,
      first_name,
      last_name,
      email,
      phone_num,
      address,
      city,
      state,
      country,
      postalcode,
      profile_pic
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send({ response: 'It worked!' });
    }
  );
};

module.exports = {
  loginUser,
  getUsers,
  getProducts,
  getUserByUid,
  productUpload,
  createUser,
  getItembyUser
};

//SELECT * FROM users WHERE username = '{$testUser}'
//AND password = crypt('${password}', password);