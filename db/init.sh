psql postgres -c "CREATE ROLE ${PGACCOUNTSUSER} WITH LOGIN CREATEDB PASSWORD '${PGACCOUNTSPWD}';"
psql postgres -c "CREATE DATABASE ${PGACCOUNTSDB} WITH OWNER ${PGACCOUNTSUSER};"