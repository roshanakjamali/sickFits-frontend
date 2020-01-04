import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { formatDistance } from "date-fns";
import Link from "next/link";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney";
import OrderItemStyles from "./styles/OrderItemStyles";
import Error from "./ErrorMessage";

const USER_ORDER_QUERY = gql`
  query USER_ORDER_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`;

const OrderUL = styled.ul`
  dispaly: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

class OrdersList extends Component {
  render() {
    return (
      <Query query={USER_ORDER_QUERY}>
        {({ data: { orders }, loading, error }) => {
          if (loading) return <p>Loading ...</p>;
          if (error) return <Error error={error} />;
          return (
            <div>
              <h2>
                You Have {orders.length} order{orders.length > 1 ? "s" : ""}
              </h2>
              <OrderUL>
                {orders.map(order => (
                  <OrderItemStyles key={order.id}>
                    <Link
                      href={{
                        pathname: "/order",
                        query: { id: order.id }
                      }}
                    >
                      <a>
                        <div className="order-meta">
                          <p>
                            {order.items.reduce((a, b) => a + b.quantity, 0)}{" "}
                            Items
                          </p>
                          <p>{order.items.length} Products</p>
                          <p>{formatDistance(order.createdAt, new Date())}</p>
                          <p>{formatMoney(order.total)}</p>
                        </div>
                        <div className="images">
                          {order.items.map(item => (
                            <img
                              key={item.id}
                              src={item.image}
                              alt={item.title}
                            />
                          ))}
                        </div>
                      </a>
                    </Link>
                  </OrderItemStyles>
                ))}
              </OrderUL>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default OrdersList;
