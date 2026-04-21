import { useDispatch, useSelector } from "react-redux";
import { ITEM_IMG_URL, DELIVERY_FEE, PLATFORM_FEE } from "../utils/constants";
import { clearCart } from "../store/slices/cartSlice";
import VegIcon from "../components/icons/VegIcon";
import NonVegIcon from "../components/icons/NonVegIcon";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    return (
      acc +
      (item?.card?.info?.price || item?.card?.info?.defaultPrice || 0) / 100
    );
  }, 0);

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 animate-fadeIn flex flex-col lg:flex-row gap-8">
      {/* ── Cart Items Section ── */}
      <div className="flex-1">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h1 className="text-3xl font-black text-swiggy-dark tracking-tighter">
            Cart <span className="text-swiggy-orange">Items</span>
            <span className="ml-2 text-sm text-swiggy-text-muted font-bold uppercase tracking-widest">
              ({cartItems.length} items)
            </span>
          </h1>
          {cartItems.length > 0 && (
            <button
              onClick={handleClearCart}
              className="bg-gray-100 text-swiggy-text-main px-4 py-2 rounded-xl font-bold text-xs hover:bg-swiggy-dark hover:text-white transition-all active:scale-95 cursor-pointer uppercase tracking-wider shadow-sm"
            >
              Clear Cart
            </button>
          )}
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
          {cartItems.length === 0 ? (
            <div className="py-24 text-center space-y-6">
              <div className="text-8xl animate-bounce">🛒</div>
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-swiggy-dark">
                  Your cart is empty
                </h2>
                <p className="text-swiggy-text-muted max-w-xs mx-auto">
                  Looks like you haven't added anything to your cart yet.
                </p>
              </div>
              <Link to="/">
                <button className="mt-4 bg-swiggy-orange text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all active:scale-95 uppercase text-sm cursor-pointer">
                  Explore Restaurants
                </button>
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {cartItems.map((item, index) => {
                const info = item?.card?.info;
                return (
                  <div
                    key={`${info?.id}-${index}`}
                    className="p-6 flex items-center gap-6 hover:bg-gray-50/50 transition-colors group"
                  >
                    <div className="relative">
                      <img
                        className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-2xl shadow-sm border border-gray-100 group-hover:scale-105 transition-transform"
                        src={ITEM_IMG_URL + info?.imageId}
                        alt={info?.name}
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        {info?.isVeg === 1 || info?.isVeg === true ? (
                          <VegIcon />
                        ) : (
                          <NonVegIcon />
                        )}
                        <h3 className="font-extrabold text-swiggy-dark md:text-lg">
                          {info?.name}
                        </h3>
                      </div>
                      <p className="text-sm text-swiggy-text-muted line-clamp-2 leading-relaxed">
                        {info?.description}
                      </p>
                      <div className="flex justify-between items-end mt-2">
                        <p className="font-bold text-swiggy-text-main text-lg">
                          ₹ {(info?.price || info?.defaultPrice) / 100}
                        </p>
                        <button className="text-[10px] font-black text-red-500 hover:text-red-700 uppercase tracking-widest cursor-pointer pb-1 transition-colors border-b border-transparent hover:border-red-700">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* ── Bill Details Section ── */}
      {cartItems.length > 0 && (
        <div className="w-full lg:w-[380px] space-y-6 lg:sticky lg:top-28 h-fit">
          <div className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-50 border-t-4 border-t-swiggy-orange">
            <h2 className="text-xl font-black text-swiggy-dark mb-6 tracking-tight">
              Bill Details
            </h2>
            <div className="space-y-4 text-sm font-bold text-swiggy-text-muted">
              <div className="flex justify-between">
                <span>Item Total</span>
                <span className="text-swiggy-text-main">
                  ₹ {totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee | 2.5 kms</span>
                <span className="text-swiggy-text-main">₹ {DELIVERY_FEE.toFixed(2)}</span>
              </div>
              <div className="border-b border-gray-100 pt-2"></div>
              <div className="flex justify-between">
                <span>Delivery Tip</span>
                <span className="text-swiggy-orange cursor-pointer hover:font-black transition-all">
                  Add Tip
                </span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span className="text-swiggy-text-main">₹ {PLATFORM_FEE.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>GST and Restaurant Charges</span>
                <span className="text-swiggy-text-main">
                  ₹ {(totalPrice * 0.05).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="border-t-2 border-dashed border-gray-200 mt-8 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-black text-swiggy-dark uppercase">
                  To Pay
                </span>
                <span className="text-xl font-black text-swiggy-dark">
                  ₹ {(totalPrice + DELIVERY_FEE + PLATFORM_FEE + totalPrice * 0.05).toFixed(2)}
                </span>
              </div>
            </div>

            <button className="w-full mt-8 bg-swiggy-orange text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all active:scale-[0.98] cursor-pointer">
              PROCEED TO PAY
            </button>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-blue-50 flex gap-4 items-center">
            <span className="text-2xl">🛡️</span>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-blue-800 opacity-60">
                100% Safe Payments
              </p>
              <p className="text-xs font-bold text-blue-900 leading-tight">
                Your payment is secured with industry-standard encryption.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
