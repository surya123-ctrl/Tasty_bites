import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import css from "../styles/OrderModal.module.css";
import { createOrder } from "@/lib/orderHandler";
import toast, { Toaster } from "react-hot-toast";
import { useStore } from "../store/store";
import { useRouter } from "next/router";
const OrderModal = ({ opened, setOpened, paymentMethod }) => {
  const theme = useMantineTheme();
  const total = typeof window !== "undefined" && localStorage.getItem("total");
  const [formData, setFormData] = useState({});
  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: [event.target.value] });
  };
  const router = useRouter();
  const resetCart = useStore((state) => state.resetCart);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = await createOrder({ ...formData, total, paymentMethod });
    console.log("Order Placed", id);
    toast.success("Order Placed");
    resetCart();
    {
      typeof window !== "undefined" && localStorage.setItem("order", id);
    }
    router.push(`/order/${id}`);
  };
  return (
    <div>
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        onClose={() => setOpened(null)}
      >
        <form action="" onSubmit={handleSubmit} className={css.formContainer}>
          <input
            onChange={handleInput}
            type="text"
            name="name"
            required
            placeholder="Name"
          />
          <input
            onChange={handleInput}
            type="text"
            name="phone"
            required
            placeholder="Phone Number"
          />
          <textarea
            onChange={handleInput}
            name="address"
            id="address"
            rows="3"
            placeholder="Address"
          ></textarea>
          <span>
            Amount to be paid : <span>₹ {total}</span> On Delivery
          </span>
          <button type="submit">Confirm Order</button>
        </form>
        <Toaster />
      </Modal>
    </div>
  );
};

export default OrderModal;
